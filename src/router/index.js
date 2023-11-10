// Composables
import { AppRoute } from "@/utils/enums";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: AppRoute.Home.path,
    name: AppRoute.Home.name,
    component: () => import("@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
