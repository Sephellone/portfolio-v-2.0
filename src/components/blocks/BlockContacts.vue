<template>
  <section class="contacts d-flex __column gap-4 pb-8">
    <section-title>{{ $t("Контакты") }}</section-title>
    <div class="contacts__content d-flex __column gap-1">
      <a
        class="contacts__item d-flex __align-center gap-2"
        v-for="(item, index) in contacts"
        :key="index"
        :href="item.href"
        :title="item.hiddenDescription"
        target="_blank"
      >
        <base-icon :icon="item.label" size="28" />
        <span class="contacts__text">{{ item.text }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/ui/SectionTitle.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";

const contacts = [
  {
    label: "mail",
    href: "mailto:alexandra.tsidulko@gmail.com",
    hiddenDescription: "Email",
    text: "alexandra.tsidulko@gmail.com",
  },
  { label: "tg", href: "https://t.me/aletsia", hiddenDescription: "Telegram", text: "@aletsia" },
  {
    label: "github",
    href: "https://github.com/sephellone",
    hiddenDescription: "GitHub",
    text: "github.com/sephellone",
  },
  { label: "vk", href: "https://vk.ru/sephellone", hiddenDescription: "VK", text: "vk.ru/sephellone" },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.contacts {
  &__item {
    width: fit-content;
    padding: 4px 0;
    @media (hover: hover) {
      &:hover {
        color: var(--palette-fg-bright);
        text-decoration: underline;
        background-color: var(--palette-accent-transparent);
      }
    }
    &:active {
      opacity: 0.6;
    }
  }
}
</style>
