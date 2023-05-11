<template>
  <div class="layouts">
    <GlobalHeader />

    <GlobalTabBar />

    <FloatButton />

    <ProductList />
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalTabBar from "./components/GlobalTabBar.vue";
import FloatButton from "./components/FloatButton.vue";
import ProductList from "./components/ProductList";

export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalTabBar,
    FloatButton,
    ProductList,
  },
};
</script>

<style></style>

<style></style>
