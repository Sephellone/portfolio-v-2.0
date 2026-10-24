import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/PageHome.vue"),
    },
    {
      name: "game",
      path: "/game",
      component: () => import("../views/PageGame.vue"),
    },
  ],
});

export default router;
