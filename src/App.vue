<template>
  <div class="layouts">
    <GlobalHeader />

    <GlobalTabBar />

    <FloatButton />

    <RouterView />
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalTabBar from "./components/GlobalTabBar.vue";
import FloatButton from "./components/FloatButton.vue";

export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalTabBar,
    FloatButton,
  },
};
</script>

<style></style>

<style></style>
