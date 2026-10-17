<template>
  <div class="header d-flex __align-center gap-4">
    <img class="header__logo" :src="`/img/logo${darkTheme.isDarkTheme ? '-dark' : '-light'}.svg`" alt="Logo" />
    <nav class="header__nav __align-center __justify-end __gap-4">
      <base-button v-for="button in buttons" :key="button.target" text-like @click="$emit('scrollTo', button.target)">
        {{ button.label }}
      </base-button>
    </nav>
    <theme-toggle class="ml-auto" />
    <lang-toggle />
  </div>
</template>
<script setup lang="ts">
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import LangToggle from "@/components/ui/LangToggle.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useDarkTheme } from "@/stores/darkTheme";
import { useI18n } from "vue-i18n";

const darkTheme = useDarkTheme();
const { t } = useI18n();

defineEmits(["scrollTo"]);

const buttons = [
  { label: t("about"), target: "about" },
  { label: t("projects"), target: "projects" },
  { label: t("contacts"), target: "contacts" },
];
</script>
<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.header {
  width: 100%;
  padding: 12px 0;

  &__nav {
    flex: 1;
    display: none;

    @include mixins.tablet-up {
      display: flex;
    }
  }

  &__logo {
    width: 40px;
    height: 40px;

    @include mixins.desktop-up {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
