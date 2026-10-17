<template>
  <div class="lang-toggle d-flex">
    <div class="lang-toggle__icon-wrapper d-center" :class="{ __active: locale === 'ru' }" @click="locale = 'ru'">
      РУ
    </div>
    <div class="lang-toggle__icon-wrapper d-center" :class="{ __active: locale === 'en' }" @click="locale = 'en'">
      EN
    </div>
  </div>
</template>
``
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>
<style scoped lang="scss">
.lang-toggle {
  cursor: pointer;
  width: fit-content;
  border-radius: 2px 12px;
  border: 1px solid var(--palette-gray);
  overflow: hidden;
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 20px;
  .lang-toggle__icon-wrapper {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
    padding: 6px 10px;
    background-color: var(--palette-gray);
    &.__active {
      opacity: 1;
      background-color: var(--palette-fg);
      color: var(--palette-bg);
    }

    &:hover:not(.__active) {
      color: var(--palette-accent);
    }
  }

  &__icon {
    fill: none;
  }
}
</style>
