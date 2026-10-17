<template>
  <section class="about d-flex __column gap-2">
    <section-title class="about__title">{{ t("Обо мне") }}</section-title>
    <div class="about__wrapper d-grid gap-8">
      <div class="about__content d-flex __column gap-4">
        <p class="about__text">{{ t("about-text-1") }}</p>
        <p class="about__text">{{ t("about-text-2") }}</p>
      </div>
      <div class="about__stack-wrapper">
        <h3 class="about__stack-title mb-6">{{ t("Стек и цифры") }}</h3>
        <div class="about__stack d-center __wrap gap-4">
          <div v-for="(item, index) in stackItems" :key="index" class="about__stack-item d-flex __align-center gap-2">
            <img class="about__stack-icon" :src="`/img/stack/${item.icon}.svg`" alt="" width="28" height="28" />
            <span class="about__stack-name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const stackItems = [
  { name: "TypeScript", icon: "typescript" },
  { name: "Vue.js", icon: "vue" },
  { name: "JavaScript", icon: "js" },
  { name: "Vuex", icon: "vuex" },
  { name: "Pinia", icon: "pinia" },
  { name: "React", icon: "react" },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "Sass", icon: "sass" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Jest", icon: "jest" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.about {
  &__wrapper {
    width: 100%;
    grid-template-columns: 1fr;
    @include mixins.tablet-up {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__content {
    padding: 0;
    @include mixins.tablet-up {
      padding: 16px 24px;
    }
  }

  &__stack-title {
    font-size: 20px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
    @include mixins.tablet-up {
      font-size: 24px;
    }
  }

  &__stack-wrapper {
    padding: 0;
    @include mixins.tablet-up {
      padding: 0 24px;
    }
  }
  &__stack-name {
    font-size: 12px;
  }
}
</style>
