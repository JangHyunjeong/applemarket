<template>
  <div class="layouts">
    <GlobalHeader
      @copyUrl="copyUrl"
      @editPost="editPost"
      @deletePost="deletePost"
      @toggleHeaderMenu="toggleHeaderMenu"
      :HeaderMenuIsShow="HeaderMenuIsShow"
    />

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
      HeaderMenuIsShow: false,
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
    // 상세 - 글 수정
    editPost() {
      console.log("글 수정");
    },

    // 상세 - 글 삭제
    deletePost(id) {
      if (this.productListData.length == 1) {
        window.localStorage.removeItem("productListData");
      } else {
        const newDataList = this.productListData.filter(
          (item) => item.id != id
        );
        this.productListData = newDataList;
        window.localStorage.setItem(
          "productListData",
          JSON.stringify(this.productListData)
        );
      }
      this.$router.push("/");
      this.HeaderMenuIsShow = false;
    },

    // 상세 - 메뉴 더보기
    toggleHeaderMenu() {
      if (this.HeaderMenuIsShow == false) {
        this.HeaderMenuIsShow = true;
      } else {
        this.HeaderMenuIsShow = false;
      }
    },

    // 상세  -공유하기
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
