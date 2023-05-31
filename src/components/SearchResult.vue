<template>
  <div class="search-result">
    <ProductList :productListData="$store.state.productListData" />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";

export default {
  name: "SearchResult",
  components: {
    ProductList,
  },
};
</script>
