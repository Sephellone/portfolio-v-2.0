<template>
  <div class="home">
    <block-header />
    <block-hero />
    <block-about />
  </div>
</template>
<script setup lang="ts">
import BlockHeader from "@/components/blocks/BlockHeader.vue";
import BlockHero from "@/components/blocks/BlockHero.vue";
import BlockAbout from "@/components/blocks/BlockAbout.vue";
</script>
<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.home {
  width: 100%;
  max-width: 1260px;
  padding: 0 20px;
  margin: 0 auto;
  color: var(--palette-fg);
  @include mixins.desktop-up {
    padding: 0 40px;
  }
}
</style>
