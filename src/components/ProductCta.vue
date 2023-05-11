<template>
  <div class="product-cta">
    <div class="left">
      <button class="button-wish" aria-label="위시리스트에 추가">
        <i class="xi-heart-o" aria-hidden="true"></i>
      </button>
      <div class="divider" aria-hidden="true"></div>
      <strong class="price">10,000원</strong>
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
};
</script>
