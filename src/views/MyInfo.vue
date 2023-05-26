<template>
  <div class="my-info">
    <div class="editable-avatar">
      <label for="editable-avatar">
        <img
          v-if="userInfo.image == null"
          src="../assets/img-user-default.png"
          alt=""
        />
        <img v-else :src="`${userInfo.image}`" alt="" />
      </label>
      <input
        type="file"
        id="editable-avatar"
        class="visually-hidden"
        @input="$emit('getUserImage', $event.target.value)"
      />
    </div>

    <div class="editable-inputs">
      <label for="nickName" class="label-title">닉네임</label>
      <input
        class="input-basic h50"
        id="nickName"
        type="text"
        :value="userInfo.nickName"
        @input="$emit('getUserNickName', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  Name: "MyInfo",
  props: {
    userInfo: Object,
  },
};
</script>
