<template>
  <div class="game d-flex __column">
    <block-game-header class="game__header" @show-controls="setDialogType('controls')" />
    <canvas class="game__canvas" ref="gameContainer" id="canvas"></canvas>
    <dialogue-window :type="dialogType" @close="closeDialog" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import kaplay from "kaplay";
import { createKaplay, createSprites } from "@/gameScripts/kaplayCtx";
import BlockGameHeader from "@/components/blocks/BlockGameHeader.vue";
import { gameScene } from "@/gameScripts/gameScene";
import DialogueWindow from "@/components/blocks/DialogueWindow.vue";
import type { DialogType } from "@/types";

const gameContainer = ref<HTMLCanvasElement | null>(null);
let k: ReturnType<typeof kaplay> | null = null;

const dialogType = ref<DialogType | null>(null);
const isInDialog = ref(false);

const setDialogType = (type: string) => {
  dialogType.value = type as DialogType;
  isInDialog.value = true;
};

const closeDialog = () => {
  dialogType.value = null;
  isInDialog.value = false;
};

onMounted(async () => {
  await nextTick();
  if (!gameContainer.value) return;

  const sizes = gameContainer.value.getBoundingClientRect();

  if (!k) {
    k = createKaplay(gameContainer.value, sizes.width, sizes.height);
  }

  const mapData = await (await fetch("/map-wip.json")).json();
  const layers = mapData.layers;

  createSprites(k);

  k.scene("game", () => gameScene(k, layers, isInDialog, setDialogType));
  k.go("game");
});

onBeforeUnmount(() => {
  if (k) {
    k.quit();
  }
});
</script>

<style scoped lang="scss">
.game {
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: calc(var(--vh) * 100);
  padding-top: 56px;

  &__header {
    position: absolute;
    top: 0;
    z-index: 1;
  }

  &__canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
