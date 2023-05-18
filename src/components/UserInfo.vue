<template>
  <RouterLink to="/" class="user-info-group">
    <div class="avatar">
      <img :src="`${data.userImage}`" :alt="`${data.userId}`" />
    </div>
    <div class="user-info">
      <strong class="name">{{ data.userId }}</strong>
      <div class="address">{{ data.userLocation }}</div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    data: Object,
  },
};
</script>
