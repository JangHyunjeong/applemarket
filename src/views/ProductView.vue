<template>
  <div class="product-view">
    <h1 class="visually-hidden">상품상세 페이지</h1>

    <div class="product-carousel">
      <img src="../assets/product-img1.jpg" alt="" />
    </div>

    <UserInfoVue />

    <ProductInfo />

    <div class="product-cta">
      <button aria-label="위시리스트에 추가">
        <i class="xi-heart-o" aria-hidden="true"></i>
      </button>
      <strong>10,000dnjs</strong>

      <button aria-label="채팅하기 버튼">채팅하기</button>
    </div>
  </div>
</template>

<script>
import UserInfoVue from "@/components/UserInfo.vue";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "ProductView",
  components: {
    UserInfoVue,
    ProductInfo,
  },
};
</script>
