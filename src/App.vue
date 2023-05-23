<template>
  <div class="layouts">
    <GlobalHeader @copyUrl="copyUrl" />

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
    this.productListData = JSON.parse(
      window.localStorage.getItem("productListData")
    );
  },
  updated() {
    this.productListData = JSON.parse(
      window.localStorage.getItem("productListData")
    );
  },
  methods: {
    copyUrl() {
      const urlArea = document.createElement("textarea");

      document.body.appendChild(urlArea);
      urlArea.value = window.document.location.href;
      urlArea.select(); //urlArea를 설정
      document.execCommand("copy"); // 복사
      document.body.removeChild(urlArea);

      alert("URL이 복사되었습니다."); // 알림창
    },
  },
};
</script>

<style></style>

<style></style>
