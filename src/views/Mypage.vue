<template>
  <h1 class="visually-hidden">마이페이지</h1>

  <UserInfo
    :userImage="userInfo.image"
    :userId="userInfo.id"
    :userLocation="userInfo.location"
    :editButton="true"
  />

  <ul class="mypage-menu-list">
    <li>
      <RouterLink to="/"><i class="xi-heart-o"></i>관심상품</RouterLink>
    </li>
    <li>
      <RouterLink to="/"> <i class="xi-paper-o"></i>내가쓴글</RouterLink>
    </li>
  </ul>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import { RouterLink } from "vue-router";

export default {
  name: "Mypage",
  components: {
    UserInfo,
    RouterLink,
  },
  props: {
    userInfo: Object,
  },
};
</script>
