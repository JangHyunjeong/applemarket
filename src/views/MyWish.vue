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
    productListData: null,
    userInfo: Object,
  },
  mounted() {
    let wishIds = this.userInfo.liked;

    if (this.productListData != null) {
      this.wishListData = this.productListData.filter((item) =>
        wishIds.includes(item.id)
      );
    } else {
      this.wishListData = null;
    }
  },
};
</script>
