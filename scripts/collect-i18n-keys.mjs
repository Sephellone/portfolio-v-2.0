import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { parse as parseVue } from "@vue/compiler-sfc";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "src");
const languageDir = path.join(sourceDir, "lang");
const sourceExtensions = new Set([".vue", ".js", ".jsx", ".ts", ".tsx", ".mjs", ".mts"]);
const keys = new Set();

async function* sourceFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      yield* sourceFiles(filePath);
    } else if (entry.isFile() && sourceExtensions.has(path.extname(entry.name))) {
      yield filePath;
    }
  }
}

function collectFromCode(code, fileName, language = path.extname(fileName).slice(1)) {
  const scriptKind = {
    ts: ts.ScriptKind.TS,
    mts: ts.ScriptKind.TS,
    tsx: ts.ScriptKind.TSX,
    jsx: ts.ScriptKind.JSX,
  }[language] ?? ts.ScriptKind.JS;
  const source = ts.createSourceFile(fileName, code, ts.ScriptTarget.Latest, true, scriptKind);

  function visit(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      (node.expression.text === "t" || node.expression.text === "$t") &&
      node.arguments.length > 0 &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      keys.add(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  }

  visit(source);
}

function collectFromTemplate(node, fileName) {
  if (node.type === 5) {
    // {{ t("key") }}
    collectFromCode(node.content.content, fileName);
  } else if (node.type === 1) {
    // :title="t('key')", @click="t('key')", etc.
    for (const prop of node.props) {
      if (prop.type === 7 && prop.exp) collectFromCode(prop.exp.content, fileName);
    }
  }

  for (const child of node.children ?? []) collectFromTemplate(child, fileName);
}

for await (const filePath of sourceFiles(sourceDir)) {
  const source = await readFile(filePath, "utf8");
  if (path.extname(filePath) === ".vue") {
    const { descriptor, errors } = parseVue(source, { filename: filePath });
    if (errors.length > 0) throw new Error(`Could not parse ${filePath}: ${errors[0]}`);
    if (descriptor.script) collectFromCode(descriptor.script.content, filePath, descriptor.script.lang ?? "js");
    if (descriptor.scriptSetup) collectFromCode(descriptor.scriptSetup.content, filePath, descriptor.scriptSetup.lang ?? "js");
    if (descriptor.template) collectFromTemplate(descriptor.template.ast, filePath);
  } else {
    collectFromCode(source, filePath);
  }
}

for (const language of ["en", "ru"]) {
  const filePath = path.join(languageDir, `${language}.json`);
  const original = await readFile(filePath, "utf8");
  const translations = JSON.parse(original);
  const missing = [...keys].filter((key) => !Object.hasOwn(translations, key)).sort();

  if (missing.length > 0) {
    for (const key of missing) {
      Object.defineProperty(translations, key, { value: key, enumerable: true, writable: true, configurable: true });
    }
    const newline = original.includes("\r\n") ? "\r\n" : "\n";
    await writeFile(filePath, `${JSON.stringify(translations, null, 2).replaceAll("\n", newline)}${newline}`);
  }

  console.log(`${language}.json: added ${missing.length} key(s)`);
}
