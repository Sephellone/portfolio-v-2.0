<template>
  <section class="hero d-center __column">
    <div class="hero__content">
      <div class="hero__wrapper d-flex __column gap-1">
        <p class="hero__eyebrow fw-600">{{ t("Привет! Я") }}</p>
        <h1 class="hero__title">{{ t("Александра Цидулко") }}</h1>
        <p class="hero__subtitle">{{ t("фронтенд разработчик") }}</p>
        <div class="hero__contacts d-flex __align-center gap-6 mt-6">
          <div class="visually-hidden">{{ t("Связаться со мной:") }}</div>
          <a
            v-for="{ label, href, hiddenDescription } in contacts"
            :key="label"
            :href="href"
            target="_blank"
            rel="noopener noreferrer"
            :title="hiddenDescription"
          >
            <span class="visually-hidden">{{ hiddenDescription }}</span>
            <base-icon :icon="label" size="30" />
          </a>
        </div>
        <base-button
          class="hero__button mt-6"
          href="/Alexandra_Tsidulko_CV.pdf"
          download="Alexandra_Tsidulko_CV.pdf"
          large
          >{{ t("скачать резюме") }}</base-button
        >
      </div>
      <block-svg-head class="hero__svg" />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
import BlockSvgHead from "@/components/blocks/BlockSvgHead.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const contacts = [
  { label: "tg", href: "https://t.me/aletsia", hiddenDescription: "Telegram" },
  { label: "github", href: "https://github.com/sephellone", hiddenDescription: "GitHub" },
  { label: "mail", href: "mailto:alexandra.tsidulko@gmail.com", hiddenDescription: "Email" },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins";
.hero {
  width: 100%;
  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1008px;
    padding: 32px 0;
    gap: 32px;

    @include mixins.tablet-up {
      flex-direction: row;
      justify-content: space-between;
      padding: 60px 0;
    }
  }

  &__title {
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
    color: var(--palette-fg-bright);
    @include mixins.desktop-up {
      font-size: 70px;
    }
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
    @include mixins.desktop-up {
      font-size: 30px;
    }
  }

  &__button {
    width: 100%;
    @include mixins.tablet-up {
      width: 270px;
    }
  }

  &__svg {
    width: 100%;
    max-width: 350px;
    align-self: center;
  }
}
</style>
