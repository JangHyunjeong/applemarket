<template>
  <div class="user-info-group">
    <div class="avatar">
      <img
        v-if="userInfo.image == null"
        src="../assets/img-user-default.png"
        alt=""
      />
      <img v-else :src="userInfo.image" :alt="userInfo.nickName" />
    </div>
    <div class="user-info">
      <strong class="name">{{ userInfo.nickName }}</strong>
      <div class="address">{{ userInfo.location }}</div>
    </div>

    <button
      type="buton"
      class="button-primary h38"
      v-if="editButton"
      @click="$router.push('/myinfo')"
    >
      정보수정
    </button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "UserInfo",
  props: {
    editButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>
