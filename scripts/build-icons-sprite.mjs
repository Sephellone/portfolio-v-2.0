import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const iconsSourceDir = path.resolve('public/img/icons/source')
const spritePath = path.resolve('public/img/icons/sprite.svg')

const toSymbolId = (fileName) =>
  path
    .basename(fileName, '.svg')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const getAttribute = (svg, attributeName) => {
  const match = svg.match(new RegExp(`${attributeName}="([^"]+)"`, 'i'))
  return match?.[1]
}

const getSvgBody = (svg) =>
  svg
    .replace(/<\?xml[\s\S]*?\?>/gi, '')
    .replace(/<!doctype[\s\S]*?>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '')
    .trim()

const buildSprite = async () => {
  await mkdir(iconsSourceDir, { recursive: true })
  await mkdir(path.dirname(spritePath), { recursive: true })

  const iconFiles = (await readdir(iconsSourceDir))
    .filter((fileName) => fileName.toLowerCase().endsWith('.svg'))
    .sort((left, right) => left.localeCompare(right))

  const symbols = await Promise.all(
    iconFiles.map(async (fileName) => {
      const svg = await readFile(path.join(iconsSourceDir, fileName), 'utf8')
      const id = toSymbolId(fileName)
      const viewBox = getAttribute(svg, 'viewBox') ?? '0 0 24 24'
      const body = getSvgBody(svg)

      return `  <symbol id="${id}" viewBox="${viewBox}">\n    ${body}\n  </symbol>`
    }),
  )

  const sprite = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display: none;">\n${symbols.join('\n')}\n</svg>\n`

  await writeFile(spritePath, sprite)
  console.log(`Built ${iconFiles.length} icons into ${path.relative(process.cwd(), spritePath)}`)
}

buildSprite()
