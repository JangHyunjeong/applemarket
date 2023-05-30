<template>
  <div>
    <UserInfo :editButton="true" />

    <ul class="mypage-menu-list">
      <li>
        <RouterLink to="/mywish"><i class="xi-heart-o"></i>관심상품</RouterLink>
      </li>
      <li>
        <RouterLink to="/mypost">
          <i class="xi-paper-o"></i>내가쓴글</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import { RouterLink } from "vue-router";

export default {
  name: "Mypage",
  data() {
    return {};
  },
  components: {
    UserInfo,
    RouterLink,
  },
};
</script>
