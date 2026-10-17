<template>
  <div class="base-chip" :class="{ __pale: pale }">
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps({
  pale: { type: Boolean },
});
</script>
<style scoped lang="scss">
@use "@/assets/scss/mixins";
.base-chip {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: var(--palette-accent-transparent);
  color: var(--palette-fg);
  border: 1px solid var(--palette-accent);
  border-radius: 50px;
  font-weight: 600;
  font-size: 12px;
  @include mixins.desktop-up {
    font-size: 14px;
    padding: 6px 12px;
  }

  &.__pale {
    background-color: var(--palette-gray-transparent);
    border-color: var(--palette-gray);
  }
}
</style>
