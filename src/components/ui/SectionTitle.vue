<template>
  <div class="section-title d-flex __align-center py-2 gap-5">
    <h2 class="section-title__text">
      <slot />
    </h2>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.section-title {
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--palette-fg);
  }

  &__text {
    width: max-content;
    font-size: 20px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
    flex-shrink: 0;
    color: var(--palette-fg-bright);
    @include mixins.desktop-up {
      font-size: 24px;
    }
  }
}
</style>
