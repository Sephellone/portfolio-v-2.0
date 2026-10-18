<template>
  <section class="experience d-flex __column gap-6 pb-8">
    <section-title>{{ $t("Опыт работы") }}</section-title>
    <div class="experience__content d-flex __column gap-6">
      <div v-for="(item, index) in experienceItems" :key="index" v-reveal class="experience__item d-flex gap-2">
        <span class="experience__period">{{ item.period }}</span>
        <div class="experience__item-wrapper d-flex __column gap-1">
          <h3 class="experience__company">{{ item.company }}</h3>
          <span class="experience__position fw-600">{{ item.position }}</span>
          <p class="experience__description mt-2">{{ item.descriptionLine1 }}</p>
          <p class="experience__description">{{ item.descriptionLine2 }}</p>
          <div class="experience__tags d-flex __wrap gap-2 mt-3">
            <base-chip v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="experience__tag">{{
              tag
            }}</base-chip>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/ui/SectionTitle.vue";
import BaseChip from "@/components/ui/BaseChip.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { t } = useI18n();

const experienceItems = computed(() => [
  {
    company: "Scrile",
    position: t("Frontend разработчик"),
    period: "2023 - 2026",
    descriptionLine1: t("scrileDescription1"),
    descriptionLine2: t("scrileDescription2"),
    tags: ["Vue 2.6", "TypeScript", "Vuex", "GraphQL", "WebRTC", "Jest", "React", "Nuxt", "Webpack"],
  },
  {
    company: "Редакция Рыба",
    position: t("Frontend разработчик"),
    period: "2024 - 2026",
    descriptionLine1: t("rybaDescription1"),
    descriptionLine2: t("rybaDescription2"),
    tags: ["Vue 3", "TypeScript", "Pinia", "Canvas API", "Kaplay.js", "Vite"],
  },
]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.experience {
  &__content {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 7px;
      top: 0;
      z-index: 0;
      display: block;
      width: 1px;
      height: 100%;
      background-color: var(--palette-fg);
      opacity: 0.6;
    }
  }
  &__item {
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      display: block;
      width: 15px;
      height: 15px;
      flex-shrink: 0;
      margin-top: 4px;
      border-radius: 50%;
      background-color: var(--palette-bg);
      border: 1px solid var(--palette-accent);
      box-shadow: inset 0 0 4px 2px var(--palette-accent);
    }
  }

  &__period {
    width: 60px;
    flex-shrink: 0;
    @include mixins.tablet-up {
      width: 120px;
    }
  }
  &__company {
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
    color: var(--palette-fg-bright);
    font-size: 20px;

    @include mixins.desktop-up {
      font-size: 24px;
    }
  }
}
</style>
