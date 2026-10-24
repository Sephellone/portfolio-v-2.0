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
        <div class="about__numbers d-grid mt-8">
          <div v-for="item in numberItems" :key="item.label" class="about__number-item d-flex __column">
            <span class="about__number-value">{{ item.value }}</span>
            <span class="about__number-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { stackItems } from "@/const";
import { differenceInYears } from "date-fns/differenceInYears";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const numberItems = computed(() => [
  { value: `${differenceInYears(new Date(), new Date("2023-04-01"))}+`, label: t("года в коммерческой разработке") },
  { value: "10+", label: t("проектов с нуля до продакшена") },
  { value: ">60", label: t("компонентов миграции Vue 2 → Vue 3") },
  { value: "91", label: t("LPS проекта после оптимизации ") },
]);
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

  &__numbers {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 16px;
    column-gap: 32px;
  }

  &__number-item {
    border-top: 1px solid var(--palette-fg);
    padding: 8px 0;
  }

  &__number-value {
    font-size: 24px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
    @include mixins.tablet-up {
      font-size: 32px;
    }
  }

  &__number-label {
    font-size: 11px;
    @include mixins.tablet-up {
      font-size: 12px;
    }
  }
}
</style>
