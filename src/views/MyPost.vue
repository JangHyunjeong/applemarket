<template>
  <ProductList :productListData="myPostData" />
</template>

<script>
import ProductList from "../components/ProductList";

export default {
  name: "MyWish",
  data() {
    return {
      myPostData: Array,
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
    const userInfoId = this.userInfo.id;
    this.myPostData = this.productListData.filter((item) =>
      userInfoId.includes(item.userId)
    );
  },
};
</script>
