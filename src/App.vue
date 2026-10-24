<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useDarkTheme } from "./stores/darkTheme";

const { initTheme } = useDarkTheme();
initTheme();

const setScreenSize = () => {
  const vh = window.innerHeight / 100;
  document.documentElement.style.setProperty("--vh", vh + "px");
};

onMounted(() => {
  setScreenSize();
  window.addEventListener("resize", () => {
    setScreenSize();
  });
});
</script>

<style scoped></style>
