<template>
  <div>
    <div class="layouts" v-if="userInfo != null">
      <GlobalHeader />

      <GlobalTabBar
        v-if="
          $route.path == '/' ||
          $route.path == '/mypage' ||
          $route.path == '/chat'
        "
      />

      <FloatButton v-if="$route.path == '/'" />

      <RouterView />
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
  methods: {
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
