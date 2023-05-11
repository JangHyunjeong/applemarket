import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import ProductView from "./views/ProductView.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/view",
    component: ProductView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
