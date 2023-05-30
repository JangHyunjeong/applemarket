<template>
  <div>
    <div class="layouts" v-if="userInfo != null">
      <GlobalHeader
        @copyUrl="copyUrl"
        @editPost="editPost"
        @deletePost="deletePost"
        @toggleHeaderMenu="toggleHeaderMenu"
        :HeaderMenuIsShow="HeaderMenuIsShow"
        :userInfo="userInfo"
        :isMyPost="isMyPost"
      />

      <GlobalTabBar
        v-if="
          $route.path == '/' ||
          $route.path == '/mypage' ||
          $route.path == '/chat'
        "
      />

      <FloatButton v-if="$route.path == '/'" />

      <RouterView
        @toggleWish="toggleWish"
        @toggleHeaderMenu="toggleHeaderMenu"
        @getUserImage="getUserImage($event)"
        @getUserNickName="getUserNickName($event)"
        @isMyPost="isMyPost"
      />
    </div>

    <Join v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalTabBar from "./components/GlobalTabBar.vue";
import FloatButton from "./components/FloatButton.vue";
import Join from "./components/Join.vue";

export default {
  name: "App",
  data() {
    return {
      HeaderMenuIsShow: false,
      isMyPost: false,
      myPostData: null,
    };
  },
  components: {
    GlobalHeader,
    GlobalTabBar,
    FloatButton,
    Join,
  },
  computed: {
    ...mapState(["userInfo", "productListData"]),
  },
  mounted() {
    // this.productListData = JSON.parse(
    //   window.localStorage.getItem("productListData")
    // );
  },
  updated() {
    // this.productListData = JSON.parse(
    //   window.localStorage.getItem("productListData")
    // );
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

    // 상세  - 공유하기
    copyUrl() {
      const urlArea = document.createElement("textarea");

      document.body.appendChild(urlArea);
      urlArea.value = window.document.location.href;
      urlArea.select(); //urlArea를 설정
      document.execCommand("copy"); // 복사
      document.body.removeChild(urlArea);

      alert("URL이 복사되었습니다."); // 알림창
    },

    // checkMyPost() {
    //   let viewData = {};
    //   let productData = this.productListData;
    //   productData.find((item, idx) => {
    //     if (item.id === Number(this.$route.params.id)) {
    //       viewData = productData[idx];
    //     }
    //   });

    //   // 내 글인지 아닌지 판별
    //   console.log(viewData.userId == this.userInfo.id);
    //   if (viewData.userId == this.userInfo.id) {
    //     this.isMyPost == true;
    //   }
    // },
  },
  // watch: {
  //   $route(to, from) {
  //     if (to.path !== from.path) {
  //       const path = to.path.split("/", 2)[1];
  //       if (path == "view") {
  //         this.checkMyPost();
  //         console.log("느려");
  //       } else {
  //         this.isMyPost == false;
  //       }
  //     }
  //   },
  // },
};
</script>

<style></style>
