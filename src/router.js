import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import ProductView from "./views/ProductView.vue";
import ProductWrite from "./views/ProductWrite.vue";
import Mypage from "./views/Mypage.vue";
import Chat from "./views/Chat.vue";
import MyWish from "./views/MyWish.vue";
import MyPost from "./views/MyPost.vue";
import MyInfo from "./views/MyInfo.vue";

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
    name: "마이페이지",
  },
  {
    path: "/chat",
    component: Chat,
    name: "채팅",
  },
  {
    path: "/mywish",
    component: MyWish,
    name: "관심상품",
  },
  {
    path: "/mypost",
    component: MyPost,
    name: "내가쓴글",
  },
  {
    path: "/myinfo",
    component: MyInfo,
    name: "정보수정",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
