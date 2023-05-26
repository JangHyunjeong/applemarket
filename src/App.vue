<template>
  <div>
    <div class="layouts" v-if="userInfo != null">
      <GlobalHeader
        @copyUrl="copyUrl"
        @editPost="editPost"
        @deletePost="deletePost"
        @toggleHeaderMenu="toggleHeaderMenu"
        @saveMyInfo="saveMyInfo"
        :HeaderMenuIsShow="HeaderMenuIsShow"
        :userInfo="userInfo"
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
        :productListData="productListData"
        :userInfo="userInfo"
        @toggleWish="toggleWish"
        @toggleHeaderMenu="toggleHeaderMenu"
        @getUserImage="getUserImage($event)"
        @getUserNickName="getUserNickName($event)"
      />
    </div>

    <Join
      v-else
      @getUserName="getUserName($event)"
      @getUserId="getUserId($event)"
      @join="join"
    />
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalTabBar from "./components/GlobalTabBar.vue";
import FloatButton from "./components/FloatButton.vue";
import Join from "./components/Join.vue";

export default {
  name: "App",
  data() {
    return {
      productListData: [],
      HeaderMenuIsShow: false,
      userName: "",
      userId: "",
      userInfo: null,
    };
  },
  components: {
    GlobalHeader,
    GlobalTabBar,
    FloatButton,
    Join,
  },
  mounted() {
    this.productListData = JSON.parse(
      window.localStorage.getItem("productListData")
    );

    this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  },
  updated() {
    this.productListData = JSON.parse(
      window.localStorage.getItem("productListData")
    );
  },
  methods: {
    // 회원가입
    getUserId(value) {
      this.userId = value;
    },
    getUserName(value) {
      this.userName = value;
    },
    join() {
      if (this.userId == "") {
        alert("아이디를 입력해주세요.");
      } else if (this.userName == "") {
        alert("닉네임을 입력해주세요.");
      } else {
        (this.userInfo = {
          id: this.userId,
          nickName: this.userName,
          location: "노원구 공릉동",
          locationDong: "공릉동",
          liked: [],
          image: null,
        }),
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(this.userInfo)
          );
      }
    },

    // 마이페이지 - 정보수정
    getUserImage(target) {
      if (target != undefined) {
        const file = target.files[0];
        const url = URL.createObjectURL(file);
        console.log(url);
        this.userInfo.image = url;
      }
    },
    getUserNickName(value) {
      this.userInfo.id = value;
      this.userInfo.nickName = value;
    },
    saveMyInfo() {
      window.localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      alert("수정완료");
    },

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
