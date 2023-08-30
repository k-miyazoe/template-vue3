import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "home" },
    meta: { isPublic: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
