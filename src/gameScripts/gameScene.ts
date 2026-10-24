import type { KAPLAYCtx, Key } from "kaplay";
import { MAP_HEIGHT, MAP_WIDTH, scaleFactor } from "@/gameScripts/const";
import { createPlayer } from "./kaplayCtx";
import { type Ref } from "vue";

export const gameScene = (
  k: KAPLAYCtx | null,
  mapLayers: any,
  isInDialog: Ref<boolean>,
  setDialog: (d: string) => void,
) => {
  if (!k) return;
  k.setLayers(["game", "buildings", "trees"], "game");

  const map = k.add([k.sprite("ground"), k.pos(0), k.scale(scaleFactor), k.layer("game")]);
  const water = k.add([k.sprite("water"), k.pos(448 * scaleFactor, 0), k.scale(scaleFactor), k.layer("game")]);
  k.add([k.sprite("buildings"), k.pos(0), k.scale(scaleFactor), k.layer("buildings")]);
  k.add([k.sprite("trees"), k.pos(0), k.scale(scaleFactor), k.layer("trees")]);

  const player = createPlayer(k);
  water.play("wave");

  for (const layer of mapLayers) {
    if (["treeBox", "boundaries", "buildings-boxes"].includes(layer.name)) {
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);
      }

      continue;
    }

    if (layer.name === "entrances") {
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);

        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            isInDialog.value = true;
            setDialog(boundary.name);
          });
        }
      }

      continue;
    }

    if (layer.name === "exit") {
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);

        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            isInDialog.value = true;
            setDialog("exit");
          });
        }
      }

      continue;
    }

    if (layer.name === "spawn") {
      for (const entity of layer.objects) {
        if (entity.name === "playerSpawn") {
          player.pos = k.vec2((map.pos.x + entity.x) * scaleFactor, (map.pos.y + entity.y) * scaleFactor);
          k.add(player);
          continue;
        }
      }
    }
  }

  k.onUpdate(() => {
    const halfWidth = k.width() / 2;
    const halfHeight = k.height() / 2;
    const camX = k.clamp(player.worldPos()!.x, halfWidth, MAP_WIDTH * scaleFactor - halfWidth);

    const camY = k.clamp(player.worldPos()!.y, halfHeight, MAP_HEIGHT * scaleFactor - halfHeight);
    k.setCamPos(camX, camY);
  });

  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || isInDialog.value) return;

    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);

    const mouseAngle = player.pos.angle(worldMousePos);

    const lowerBound = 50;
    const upperBound = 125;

    if (mouseAngle > lowerBound && mouseAngle < upperBound && player.getCurAnim()!.name !== "walk-up") {
      player.play("walk-up");
      player.direction = "up";
      return;
    }

    if (mouseAngle < -lowerBound && mouseAngle > -upperBound && player.getCurAnim()!.name !== "walk-down") {
      player.play("walk-down");
      player.direction = "down";
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      player.flipX = true;
      if (player.getCurAnim()!.name !== "walk-side") player.play("walk-side");
      player.direction = "right";
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      player.flipX = false;
      if (player.getCurAnim()!.name !== "walk-side") player.play("walk-side");
      player.direction = "left";
      return;
    }
  });

  function stopAnims() {
    if (player.direction === "down") {
      player.play("idle-down");
      return;
    }
    if (player.direction === "up") {
      player.play("idle-up");
      return;
    }

    player.play("idle-side");
  }

  k.onMouseRelease(stopAnims);

  k.onKeyRelease(() => {
    stopAnims();
  });
  k.onKeyDown((key: Key) => {
    const keyMap = [k.isKeyDown("right"), k.isKeyDown("left"), k.isKeyDown("up"), k.isKeyDown("down")];
    const keyMapWSAD = [k.isKeyDown("d"), k.isKeyDown("a"), k.isKeyDown("w"), k.isKeyDown("s")];

    let nbOfKeyPressed = 0;
    for (const key of keyMap) {
      if (key) {
        nbOfKeyPressed++;
      }
    }

    if (nbOfKeyPressed > 1) return;

    if (isInDialog.value) return;
    if (keyMap[0] || keyMapWSAD[0]) {
      player.flipX = true;
      if (player.getCurAnim()!.name !== "walk-side") player.play("walk-side");
      player.direction = "right";
      player.move(player.speed, 0);
      return;
    }

    if (keyMap[1] || keyMapWSAD[1]) {
      player.flipX = false;
      if (player.getCurAnim()!.name !== "walk-side") player.play("walk-side");
      player.direction = "left";
      player.move(-player.speed, 0);
      return;
    }

    if (keyMap[2] || keyMapWSAD[2]) {
      if (player.getCurAnim()!.name !== "walk-up") player.play("walk-up");
      player.direction = "up";
      player.move(0, -player.speed);
      return;
    }

    if (keyMap[3] || keyMapWSAD[3]) {
      if (player.getCurAnim()!.name !== "walk-down") player.play("walk-down");
      player.direction = "down";
      player.move(0, player.speed);
    }
  });
};
