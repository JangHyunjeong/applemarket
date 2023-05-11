<template>
  <h1 class="visually-hidden">상품상세 페이지</h1>

  <ProductCarousel />

  <UserInfoVue />

  <ProductInfo />

  <ProductCta />
</template>

<script>
import UserInfoVue from "@/components/UserInfo.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import ProductCta from "@/components/ProductCta.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";

export default {
  name: "ProductView",
  components: {
    UserInfoVue,
    ProductInfo,
    ProductCta,
    ProductCarousel,
  },
};
</script>
