<template>
  <div class="product-cta">
    <div class="left">
      <button
        class="button-wish"
        aria-label="위시리스트에 추가"
        @click="$emit('toggleWish')"
      >
        <i
          v-if="userInfo.liked.includes(Number($route.params.id)) == false"
          class="xi-heart-o"
          aria-hidden="true"
        ></i>
        <i v-else class="xi-heart" aria-hidden="true"></i>
      </button>
      <div class="divider" aria-hidden="true"></div>
      <strong class="price">{{ Number(data.price).toLocaleString() }}원</strong>
    </div>

    <button class="button-chat h38 button-primary" aria-label="채팅하기 버튼">
      채팅하기
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCta",
  data() {
    return {};
  },
  props: {
    data: Object,
    userInfo: Object,
  },
  methods: {},
};
</script>
