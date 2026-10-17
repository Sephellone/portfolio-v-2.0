<template>
  <div class="theme-toggle d-flex" @click="store.toggleTheme()">
    <base-icon class="theme-toggle__icon" :icon="store.isDarkTheme ? 'sun' : 'moon'" size="24" />
  </div>
</template>
``
<script setup lang="ts">
import { useDarkTheme } from "@/stores/darkTheme";
import BaseIcon from "@/components/ui/BaseIcon.vue";
const store = useDarkTheme();
</script>
<style scoped lang="scss">
.theme-toggle {
  cursor: pointer;
  padding: 8px;
  width: fit-content;
  transition: all 0.2s ease-in-out;

  &__icon {
    fill: none;
  }

  &:hover .theme-toggle__icon {
    fill: var(--palette-accent);
  }
}
</style>
