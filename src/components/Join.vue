<template>
  <div class="join">
    <Logo />

    <label for="userId" class="label-title">아이디</label>
    <input
      type="text"
      id="userId"
      class="input-basic h50"
      @input="$emit('getUserId', $event.target.value)"
      placeholder="사용하실 아이디를 입력해주세요"
    />

    <label for="nickName" class="label-title">닉네임</label>
    <input
      type="text"
      id="nickName"
      class="input-basic h50"
      @input="$emit('getUserName', $event.target.value)"
      placeholder="사용하실 닉네임을 입력해주세요"
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
