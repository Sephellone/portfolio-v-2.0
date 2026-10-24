import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createPinia } from "pinia";
import reveal from "./directives/reveal";
import { i18n } from "./lang/i18n.ts";

const app = createApp(App);

app.use(i18n);
app.use(createPinia());

app.use(router);
app.directive("reveal", reveal);

app.mount("#app");
