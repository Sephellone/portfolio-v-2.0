<template>
  <div class="dialog" v-if="type">
    <div class="dialog__closer d-center" @click="$emit('close')"></div>
    <div v-if="type === 'about'" class="dialog__inner __about">
      {{ $t("game-about") }}
      <div class="d-flex __wrap gap-4 mt-2">
        <a v-for="item in contacts" :key="item.label" class="dialog__link" :href="item.href" target="_blank">
          {{ item.hiddenDescription }}
        </a>
      </div>
    </div>
    <div v-else-if="type === 'skills'" class="dialog__inner __skills">
      {{ $t("Мой стек:") }}
      <div class="d-flex gap-3 __wrap my-2">
        <span v-for="item in stackItems" :key="item.name">{{ item.name }},</span>
      </div>
      {{ $t("а еще я умею делать браузерные игры и быстро обучаюсь новому.") }}
    </div>
    <div v-else-if="type === 'experience'" class="dialog__inner __exp">
      {{ $t("Мой опыт работы:") }}
      <div class="d-flex __column gap-4 mt-4">
        <div v-for="item in experienceItems" :key="item.company" class="d-flex gap-2 __column">
          <div class="d-flex __wrap gap-1">
            <span>{{ item.period }}</span>
            <span class="fw-600">{{ item.company }}</span>
          </div>
          <span>{{ item.descriptionLine1 }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'education'" class="dialog__inner __ed">
      <span class="fw-600">{{ $t("Образование:") }}</span>
      <div class="d-flex __column gap-3 my-3">
        <div v-for="item in educationItems" :key="item.school" class="d-flex gap-2 __column">
          <div class="d-flex __wrap gap-1">
            <span>{{ item.period }}</span>
            <span class="fw-600">{{ item.school }}</span>
          </div>
          <span>{{ item.position }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="type === 'projects'">
      {{ $t("Избранные проекты") }}
      <div v-if="project" class="dialog__project mt-5 d-flex __column gap-2">
        <div class="dialog__img-wrapper d-center">
          <img class="dialog__img" :src="`/img/projects/${project.img}.webp`" />
        </div>
        <h3 class="dialog__item-title my-1">{{ project.name }}</h3>
        <p v-for="(text, i) in project.description" :key="i" class="dialog__item-description">{{ text }}</p>
        <a class="dialog__link __self-end mt-2" :href="project.link" target="_blank">{{ $t("Открыть сайт") }}</a>
      </div>
      <div class="dialog__controls d-flex __align-center __space-between mt-3">
        <button class="dialog__button __back" :disabled="currentProjectIndex === 0" @click="currentProjectIndex -= 1">
          <
        </button>
        <button
          class="dialog__button __forward"
          :disabled="currentProjectIndex === projects.length - 1"
          @click="currentProjectIndex += 1"
        >
          >
        </button>
      </div>
    </div>
    <div v-else-if="type === 'controls'">
      <h3>{{ $t("Управление:") }}</h3>
      <div v-if="isTouchScreen" class="touch my-4">
        <div>{{ $t("Нажмите на экран для движения") }}</div>
        <div>{{ $t("Используйте кнопку с крестиком, чтобы закрыть диалог") }}</div>
      </div>
      <div v-else class="desktop-only my-4">
        <div>↑ ↓ 🡐 🡒 {{ $t("или WASD, чтобы двигаться") }}</div>
        <div>Enter/Esc, {{ $t("чтобы закрыть диалоговое окно") }}</div>
        <div class="mt-2">{{ $t("Или управляйте мышью") }}</div>
      </div>
    </div>
    <div class="d-flex __column gap-4" v-else>
      <h3>{{ $t("Уже уходите?") }}</h3>
      <router-link class="dialog__link" :to="{ name: 'home' }">
        {{ $t("Перейти к обычной версии портфолио") }}
      </router-link>
      <div>{{ $t("Или вы можете просто закрыть эту вкладку") }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contacts, educationItems, experienceItems, projects, stackItems } from "@/const";
import type { DialogType } from "@/types";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps<{
  type: DialogType | null;
}>();

const emit = defineEmits(["close"]);

const isTouchScreen = "ontouchstart" in document.documentElement;

const currentProjectIndex = ref(0);
const project = computed(() => projects.value[currentProjectIndex.value]);

const onKeyPress = (e: KeyboardEvent) => {
  if (props.type && (e.key === "Enter" || e.key === "Escape")) {
    emit("close");
  }
};

onMounted(() => {
  document.addEventListener("keydown", onKeyPress);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeyPress);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins";
.dialog {
  position: absolute;
  z-index: 2;
  bottom: 14px;
  left: 50%;
  width: 90%;
  max-width: 700px;
  padding: 12px 40px 12px 20px;
  background: linear-gradient(180deg, #5757af, #00004f);
  color: var(--palette-white);
  border: 2px solid var(--palette-white);
  box-shadow:
    inset 2px 2px 0 2px #00000025,
    2px 2px 0 2px #00000025;
  border-radius: 8px;
  font-family: "Press Start 2P", sans-serif;
  font-size: 12px;
  line-height: 1.4;
  transform: translateX(-50%);

  &__link {
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &__closer {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, -40%);
    background-color: var(--palette-gray);
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid var(--palette-white);
    box-shadow: 2px 2px 0 2px #00000025;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 80%;
      height: 2px;
      background-color: var(--palette-white);
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

    &:hover {
      &::before,
      &::after {
        background-color: var(--palette-accent);
      }
    }
  }

  &__img-wrapper {
    width: 100%;
    max-width: 300px;
    align-self: center;
    height: 200px;
    overflow: hidden;
    border: 2px solid var(--palette-white);
    border-radius: 4px;
    box-shadow:
      inset 3px 3px 0 2px #00000025,
      3px 3px 0 2px #00000025;
  }

  &__img {
    object-fit: fill;
  }

  &__button {
    padding: 8px;
    font-family: inherit;
    background-color: #00004f;
    border: 2px solid var(--palette-white);
    color: var(--palette-white);
    border-radius: 4px;
    user-select: none;

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
</style>
