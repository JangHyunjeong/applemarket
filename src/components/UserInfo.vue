<template>
  <div class="user-info-group">
    <div class="avatar">
      <img :src="userImage" :alt="userId" />
    </div>
    <div class="user-info">
      <strong class="name">{{ userId }}</strong>
      <div class="address">{{ userLocation }}</div>
    </div>

    <button type="buton" class="button-primary button-h38" v-if="editButton">
      정보수정
    </button>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  props: {
    //data: Object,
    userImage: String,
    userId: String,
    userLocation: String,
    editButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
