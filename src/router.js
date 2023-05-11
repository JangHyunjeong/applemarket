import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import ProductView from "./views/ProductView.vue";
import ProductWrite from "./views/ProductWrite.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/view",
    component: ProductView,
  },
  {
    path: "/write",
    component: ProductWrite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
