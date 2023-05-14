<template>
  <div class="layouts">
    <GlobalHeader />

    <GlobalTabBar v-if="$route.path == '/'" />

    <FloatButton v-if="$route.path == '/'" />

    <RouterView :productListData="productListData" />
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalTabBar from "./components/GlobalTabBar.vue";
import FloatButton from "./components/FloatButton.vue";

export default {
  name: "App",
  data() {
    return {
      productListData: [],
    };
  },
  components: {
    GlobalHeader,
    GlobalTabBar,
    FloatButton,
  },
  mounted() {
    const productListData = JSON.parse(
      window.localStorage.getItem("productListData")
    );
    this.productListData = productListData;
  },
};
</script>

<style></style>

<style></style>
