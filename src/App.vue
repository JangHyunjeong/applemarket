<template>
  <div class="layouts">
    <GlobalHeader
      @copyUrl="copyUrl"
      @editPost="editPost"
      @deletePost="deletePost"
      @toggleHeaderMenu="toggleHeaderMenu"
      :HeaderMenuIsShow="HeaderMenuIsShow"
      :userInfo="userInfo"
    />

    <GlobalTabBar
      v-if="
        $route.path == '/' || $route.path == '/mypage' || $route.path == '/chat'
      "
    />

    <FloatButton v-if="$route.path == '/'" />

    <RouterView
      :productListData="productListData"
      :userInfo="userInfo"
      @toggleWish="toggleWish"
      @toggleHeaderMenu="toggleHeaderMenu"
    />
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
      userInfo: {
        id: "토까가좋아",
        location: "노원구 공릉동",
        locationDong: "공릉동",
        liked: [1, 2],
        image: require("./assets/user01.jpg"),
      },
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
    // 좋아요
    toggleWish() {
      const id = Number(this.$route.params.id);
      let likedList = this.userInfo.liked;

      const target = likedList.find((item) => {
        if (item == id) {
          return true;
        }
      });
      const idIdx = likedList.indexOf(target);

      if (likedList.includes(id)) {
        likedList.splice(idIdx, 1);
      } else {
        likedList.push(id);
      }
    },

    // 상세 - 글 수정페이지로 이동
    editPost() {
      this.$router.push(`/write/${this.$route.params.id}`);
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
