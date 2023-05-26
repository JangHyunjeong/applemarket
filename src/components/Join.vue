<template>
  <div class="join">
    <Logo />

    <label for="nickName" class="label-title">닉네임을 입력해주세요</label>
    <input
      type="text"
      id="nickName"
      class="input-basic h50"
      @input="$emit('getUserName', $event.target.value)"
    />

    <button type="button" class="button-primary h50" @click="$emit('join')">
      완료
    </button>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "join",
  components: {
    Logo,
  },
};
</script>
