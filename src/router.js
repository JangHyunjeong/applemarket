import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import ProductView from "./views/ProductView.vue";
import ProductWrite from "./views/ProductWrite.vue";
import Mypage from "./views/Mypage.vue";
import Chat from "./views/Chat.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/view/:id",
    component: ProductView,
  },
  {
    path: "/write/:id?",
    component: ProductWrite,
  },
  {
    path: "/mypage",
    component: Mypage,
  },
  {
    path: "/chat",
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
