import { ref } from "vue";
import { defineStore } from "pinia";

enum controlClass {
  DARK = "",
  LIGHT = "light",
}

const changeControlClass = (isDark: boolean): void => {
  document.documentElement.className = isDark ? controlClass.DARK : controlClass.LIGHT;
};

const isSystemPreferesLight = (): boolean => {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
};

export const useDarkTheme = defineStore("darkTheme", () => {
  const isDarkTheme = ref(true);

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    changeControlClass(isDarkTheme.value);
  };

  const initTheme = () => {
    isDarkTheme.value = !isSystemPreferesLight();
    changeControlClass(isDarkTheme.value);
  };

  return { isDarkTheme, toggleTheme, initTheme };
});
