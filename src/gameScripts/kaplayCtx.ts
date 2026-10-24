import kaplay, { type KAPLAYCtx } from "kaplay";
import { scaleFactor } from "./const";

export const createKaplay = (canvas: HTMLCanvasElement, width: number, height: number) => {
  return kaplay({
    width,
    height,
    letterbox: true,
    global: false,
    touchToMouse: true,
    debug: true,
    debugKey: "g",
    loadingScreen: true,
    pixelDensity: 2,
    canvas: canvas,
    background: [15, 15, 15, 0.1],
  });
};

export const createSprites = (k: KAPLAYCtx) => {
  k.loadSprite("playerSprite", "/img/game/player.png", {
    sliceX: 12,
    sliceY: 1,
    anims: {
      "idle-down": 0,
      "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-side": 4,
      "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
      "idle-up": 8,
      "walk-up": { from: 8, to: 11, loop: true, speed: 8 },
    },
  });

  k.loadSprite("ground", "/img/game/ground.png");
  k.loadSprite("buildings", "/img/game/buildings.png");
  k.loadSprite("trees", "/img/game/trees.png");
  k.loadSprite("water", "/img/game/waterSprite.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
      wave: { from: 0, to: 3, loop: true, speed: 1.5 },
    },
  });
};

export const createPlayer = (k: KAPLAYCtx) => {
  return k.make([
    k.sprite("playerSprite", { anim: "idle-down" }),
    k.area({
      shape: new k.Rect(k.vec2(0), 16, 24),
    }),
    k.body(),
    k.anchor("center"),
    k.pos(),
    k.scale(scaleFactor),
    {
      speed: 250,
      direction: "down",
      isInDialogue: false,
    },
    "player",
  ]);
};

export function setCamScale(k: KAPLAYCtx) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.setCamScale(k.vec2(1));
  } else {
    k.setCamScale(k.vec2(1.5));
  }
}
