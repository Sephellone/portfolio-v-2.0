<template>
  <router-link class="sprite-button px-6 py-4" to="/game">
    <div class="sprite-button__sprite"></div>
  </router-link>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.sprite-button {
  &__sprite {
    width: 16px;
    height: 24px;
    background-image: url("/img/game/sprite-4-frames.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: -64px;
    transform: scale(-2, 2);
  }
  &:hover {
    & .sprite-button__sprite {
      animation: side-walk 0.6s steps(4) infinite;
    }
    filter: drop-shadow(0 0 10px var(--palette-accent));
  }
}
@keyframes side-walk {
  from {
    background-position: -64px 0;
  }
  to {
    background-position: -129px 0;
  }
}
</style>
