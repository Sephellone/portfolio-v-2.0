<template>
  <section class="education d-flex __column gap-6 pb-8">
    <section-title>{{ $t("Образование") }}</section-title>
    <div class="education__content d-flex __column gap-6">
      <div v-for="(item, index) in educationItems" :key="index" v-reveal class="education__item d-flex gap-2">
        <span class="education__period">{{ item.period }}</span>
        <div class="education__item-wrapper d-flex __column gap-1">
          <h3 class="education__school">{{ item.school }}</h3>
          <span class="education__position fw-600">{{ item.position }}</span>
          <p v-if="item.descriptionLine" class="education__description">{{ item.descriptionLine }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { educationItems } from "@/const";
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.education {
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
  &__school {
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
