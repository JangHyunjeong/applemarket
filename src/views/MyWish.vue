<template>
  <ProductList :productListData="wishListData" />
</template>

<script>
import ProductList from "../components/ProductList";

export default {
  name: "MyWish",
  data() {
    return {
      wishListData: Array,
    };
  },
  components: {
    ProductList,
  },
  props: {
    productListData: Array,
    userInfo: Object,
  },
  mounted() {
    let wishIds = this.userInfo.liked;

    this.wishListData = this.productListData.filter((item) =>
      wishIds.includes(item.id)
    );
  },
};
</script>
