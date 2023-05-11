<template>
  <div class="product-view">
    <h1 class="visually-hidden">상품상세 페이지</h1>

    <div class="product-carousel">
      <img src="../assets/product-img1.jpg" alt="" />
    </div>

    <UserInfoVue />

    <ProductInfo />

    <ProductCta />
  </div>
</template>

<script>
import UserInfoVue from "@/components/UserInfo.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import ProductCta from "@/components/ProductCta.vue";

export default {
  name: "ProductView",
  components: {
    UserInfoVue,
    ProductInfo,
    ProductCta,
  },
};
</script>
