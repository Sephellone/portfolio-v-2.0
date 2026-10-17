<template>
  <svg class="base-icon" :width="iconSize" :height="iconSize" aria-hidden="true" focusable="false">
    <use :href="href" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 40,
  },
});

const href = computed(() => `/img/icons/sprite.svg#${props.icon}`);
const iconSize = computed(() => (typeof props.size === "number" ? `${props.size}px` : props.size));
</script>

<style scoped>
.base-icon {
  display: block;
  color: inherit;
}
</style>
