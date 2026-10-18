<template>
  <footer class="footer d-flex __align-center gap-3 pt-8">
    <base-icon icon="copyright" size="20" />
    <span class="footer__text">{{ $t("Дизайн и разработка: Александра Цидулко") }}, {{ year }}</span>
  </footer>
</template>

<script setup lang="ts">
import BaseIcon from "../ui/BaseIcon.vue";
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
  font-size: 12px;
  opacity: 0.8;
}
</style>
