<template>
  <div class="home">
    <block-header id="header" ref="header" @scroll-to="onScrollTo" />
    <main>
      <block-hero />
      <block-about id="about" />
      <block-experience />
      <block-projects id="projects" />
      <block-education />
      <block-contacts id="contacts" />
    </main>
    <block-footer />
    <div v-show="!isHeaderVisible" class="home__to-top d-center" @click="onScrollTo('header')">
      <span class="home__arrow"></span>
    </div>
    <sprite-button class="home__sprite" />
  </div>
</template>
<script setup lang="ts">
import BlockHeader from "@/components/blocks/BlockHeader.vue";
import BlockHero from "@/components/blocks/BlockHero.vue";
import BlockAbout from "@/components/blocks/BlockAbout.vue";
import BlockExperience from "@/components/blocks/BlockExperience.vue";
import BlockProjects from "@/components/blocks/BlockProjects.vue";
import BlockEducation from "@/components/blocks/BlockEducation.vue";
import BlockContacts from "@/components/blocks/BlockContacts.vue";
import BlockFooter from "@/components/blocks/BlockFooter.vue";
import { onMounted, onUnmounted, ref } from "vue";
import SpriteButton from "@/components/SpriteButton.vue";

const header = ref<InstanceType<typeof BlockHeader> | null>(null);
const isHeaderVisible = ref(true);
let headerObserver: IntersectionObserver | undefined;

onMounted(() => {
  const headerElement = header.value?.$el as HTMLElement | undefined;
  if (!headerElement || !("IntersectionObserver" in window)) return;

  headerObserver = new IntersectionObserver(([entry]) => {
    if (entry) isHeaderVisible.value = entry.isIntersecting;
  });
  headerObserver.observe(headerElement);
});

onUnmounted(() => headerObserver?.disconnect());

const onScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>
<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.home {
  position: relative;
  width: 100%;
  max-width: 1260px;
  padding: 0 20px 40px;
  margin: 0 auto;
  color: var(--palette-fg);
  @include mixins.desktop-up {
    padding: 0 40px 40px;
  }

  &__to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 42px;
    height: 42px;
    border: 1px solid var(--palette-fg);
    border-radius: 50%;
    background-color: var(--palette-gray-transparent);
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0 7px var(--palette-fg));
      border-color: var(--palette-accent);

      & .home__arrow {
        border-color: var(--palette-accent);
      }
    }
  }
  &__arrow {
    display: block;
    width: 14px;
    height: 14px;
    border: 2px solid var(--palette-fg);
    border-bottom: none;
    border-right: none;
    transform: translateY(4px) rotate(45deg);
  }

  &__sprite {
    position: fixed;
    right: 0;
    top: 6px;

    @include mixins.tablet-up {
      right: 10px;
      top: 14px;
    }
  }
}
</style>
