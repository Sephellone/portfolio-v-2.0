<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { useDarkTheme } from "./stores/darkTheme";

const { initTheme } = useDarkTheme();
initTheme();
</script>

<style scoped></style>
