<template>
  <ProductList :productListData="productListDataOriginal" />
</template>

<script>
import { mapState } from "vuex";
import ProductList from "../components/ProductList";

export default {
  name: "Home",
  components: {
    ProductList,
  },
  computed: {
    ...mapState(["productListDataOriginal"]),
  },
};
</script>
