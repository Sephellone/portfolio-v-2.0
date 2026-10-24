<template>
  <section class="projects">
    <section-title>{{ $t("Избранные проекты") }}</section-title>
    <div class="projects__content d-flex __column gap-11 py-8">
      <div v-for="item in projects" :key="item.id" v-reveal class="projects__item d-flex gap-2">
        <div class="projects__item-picture d-flex">
          <img class="projects__img" :src="`/img/projects/${item.img}.webp`" alt="" width="300" height="210" />
        </div>
        <div class="projects__item-content d-flex __column __space-between gap-3">
          <div class="projects__item-wrapper d-flex __column gap-2">
            <h3 class="projects__item-title mb-1">{{ item.name }}</h3>
            <p v-for="(text, i) in item.description" :key="i" class="projects__item-description">{{ text }}</p>
            <div class="projects__tags d-flex __wrap gap-2 mt-4">
              <base-chip v-for="(tag, i) in item.tags" :key="i" pale>{{ tag }}</base-chip>
            </div>
          </div>
          <base-button class="projects__button" :href="item.link">{{ $t("Открыть сайт") }}</base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseChip from "@/components/ui/BaseChip.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { projects } from "@/const";
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";

.projects {
  &__item {
    flex-direction: column;
    background-color: var(--palette-bg-2);

    @include mixins.tablet-up {
      flex-direction: row;
    }

    &:nth-child(2n) {
      @include mixins.tablet-up {
        flex-direction: row-reverse;

        & .projects__button {
          align-self: flex-start;
        }
      }
    }
  }

  &__item-picture {
    width: 100%;
    align-items: center;
    max-height: 230px;
    overflow: hidden;
    flex-shrink: 0;
    @include mixins.tablet-up {
      max-height: 360px;
      width: 400px;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }

  &__item-content {
    padding: 20px 16px;
    flex-grow: 1;

    @include mixins.tablet-up {
      padding: 40px;
    }
  }

  &__item-title {
    font-size: 24px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-weight: 600;
    @include mixins.tablet-up {
      font-size: 32px;
    }
  }

  &__button {
    align-self: flex-end;
  }
}
</style>
