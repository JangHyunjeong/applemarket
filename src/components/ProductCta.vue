<template>
  <div class="product-cta">
    <div class="left">
      <button
        class="button-wish"
        aria-label="위시리스트에 추가"
        @click="toggleWish"
      >
        <i v-if="data.liked == false" class="xi-heart-o" aria-hidden="true"></i>
        <i v-else class="xi-heart" aria-hidden="true"></i>
      </button>
      <div class="divider" aria-hidden="true"></div>
      <strong class="price">{{ Number(data.price).toLocaleString() }}원</strong>
    </div>

    <button
      class="button-chat button-h38 button-primary"
      aria-label="채팅하기 버튼"
    >
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
  },
  methods: {
    toggleWish() {
      // 로컬스토린지 내 데이터 추후 변경
      if (this.data.liked == false) {
        this.data.liked = true;
      } else {
        this.data.liked = false;
      }
    },
  },
};
</script>
