import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createPinia } from "pinia";
import en from "./lang/en.json";
import ru from "./lang/ru.json";

const app = createApp(App);

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "ru",
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

app.use(i18n);
app.use(createPinia());

app.use(router);

app.mount("#app");
