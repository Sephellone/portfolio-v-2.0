<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :class="{
      __large: large,
      __fullWidth: fullWidth,
      __small: small,
      '__text-like': textLike,
    }"
    class="base-button"
    :to="to"
    :href="href"
    :download="download ? download : undefined"
    :target="href ? '_blank' : undefined"
    @click="onClick"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import type { RouteLocationRaw } from "vue-router";

defineProps({
  fullWidth: { type: Boolean },
  small: { type: Boolean },
  large: { type: Boolean },
  textLike: { type: Boolean },
  to: { type: Object as PropType<RouteLocationRaw> },
  href: { type: String },
  download: { type: String },
});
const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins";

.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  min-width: 100px;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  background-color: var(--palette-accent);
  color: var(--palette-black);
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  box-shadow: none;
  overflow: hidden;
  user-select: none;

  @include mixins.desktop-up {
    font-size: 24px;
  }

  @media (hover: hover) {
    &:hover {
      filter: brightness(0.8);
    }
  }

  &:active {
    filter: brightness(0.6);
  }

  &.__fullWidth {
    width: 100%;
  }

  &.__small {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 4px;

    @include mixins.desktop-up {
      font-size: 16px;
    }
  }

  &.__large {
    font-size: 24px;
    padding: 12px 20px;

    @include mixins.desktop-up {
      font-size: 28px;
    }
  }

  &.__text-like {
    padding: 8px 0;
    background-color: transparent;
    color: var(--palette-fg);
  }
}
</style>
