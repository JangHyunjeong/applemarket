<template>
  <RouterLink to="/" class="user-info-group">
    <div class="avatar">
      <img src="../assets/user01.jpg" alt="유저명" />
    </div>
    <div class="user-info">
      <strong class="name">토끼가 좋아</strong>
      <div class="address">중랑구 신내2동</div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>
