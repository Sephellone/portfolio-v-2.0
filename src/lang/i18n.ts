import { createI18n } from "vue-i18n";
import en from "./en.json";
import ru from "./ru.json";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "ru",
  globalInjection: true,
  messages: {
    en: {
      "Hello world!": "Hello world!",
      ...en,
    },
    ru: {
      "Hello world!": "Привет, мир!",
      ...ru,
    },
  },
});

export { i18n };
