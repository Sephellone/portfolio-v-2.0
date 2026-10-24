<template>
  <header class="game-header d-flex __align-center">
    <base-button class="game-header__button" text-like :to="{ name: 'home' }">
      <span class="game-header__go-back d-flex gap-2 __align-center">{{ $t("К обычной версии") }}</span>
    </base-button>

    <div class="d-flex __align-center ml-auto gap-4">
      <base-button class="game-header__button px-4" text-like @click="toggleMusic">
        <base-icon :icon="isMusicPlaying ? 'music-on' : 'music-off'" size="28" />
      </base-button>
      <lang-toggle />
      <base-button class="game-header__controls-button px-2" text-like @click="$emit('showControls')">?</base-button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Howl } from "howler";
import BaseButton from "../ui/BaseButton.vue";
import LangToggle from "@/components/ui/LangToggle.vue";
import BaseIcon from "../ui/BaseIcon.vue";

defineEmits(["showControls"]);

const isMusicPlaying = ref(false);
let music: Howl | null = null;
const toggleMusic = () => {
  if (!music) return;

  music.volume(0.5);

  if (isMusicPlaying.value) {
    music.pause();
    isMusicPlaying.value = false;
    return;
  }

  music.play();
  isMusicPlaying.value = true;
};

onMounted(() => {
  music = new Howl({
    src: ["/sound/bg.mp3"],
    loop: true,
    preload: true,
    onloaderror: () => (isMusicPlaying.value = false),
    onplayerror: () => (isMusicPlaying.value = false),
  });
});

onBeforeUnmount(() => {
  music?.stop();
  music?.unload();
  music = null;
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.game-header {
  background-color: var(--palette-bg);
  width: 100%;
  margin: 0 auto;
  padding: 8px 20px;

  @include mixins.tablet-up {
    padding: 8px 40px;
  }

  &__go-back {
    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      border: 3px solid var(--palette-fg);
      border-right: none;
      border-bottom: none;
      flex-shrink: 0;
      transform: translateY(-2px) rotate(-45deg);
    }
  }
}
</style>
