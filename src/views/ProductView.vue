<template>
  <h1 class="visually-hidden">상품상세 페이지</h1>

  <ProductCarousel :data="data" />

  <UserInfoVue :data="data" />

  <ProductInfo :data="data" />

  <ProductCta :data="data" />
</template>

<script>
import { useRoute } from "vue-router";
import UserInfoVue from "@/components/UserInfo.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import ProductCta from "@/components/ProductCta.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";

export default {
  name: "ProductView",
  data() {
    return {
      data: "",
    };
  },
  components: {
    UserInfoVue,
    ProductInfo,
    ProductCta,
    ProductCarousel,
  },
  props: {
    productListData: Array,
  },
  mounted() {
    // 사용할 데이터만 넘기기
    const route = useRoute();
    this.productListData.find((item, idx) => {
      if (item.id === Number(route.params.id)) {
        this.data = this.productListData[idx];
        console.log(item.id);
      }
    });
  },
};
</script>
