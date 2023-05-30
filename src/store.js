import { createStore } from "vuex";
import router from "./router";

const store = createStore({
  state() {
    return {
      productListData: JSON.parse(
        window.localStorage.getItem("productListData")
      ),
      userName: "",
      userId: "",
      userInfo: JSON.parse(window.localStorage.getItem("userInfo")),
    };
  },
  mutations: {
    /* 회원가입 */
    getUserId(state, value) {
      state.userId = value;
    },
    getUserName(state, value) {
      state.userName = value;
    },
    join(state) {
      if (state.userId == "") {
        alert("아이디를 입력해주세요.");
      } else if (state.userName == "") {
        alert("닉네임을 입력해주세요.");
      } else {
        (state.userInfo = {
          id: state.userId,
          nickName: state.userName,
          password: "",
          location: "노원구 공릉동",
          locationDong: "공릉동",
          liked: [],
          image: null,
        }),
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(state.userInfo)
          );
      }
    },

    /* 마이페이지 - 정보수정 */
    getUserImage(state, target) {
      if (target != undefined) {
        const file = target.files[0];
        const url = URL.createObjectURL(file);
        state.userInfo.image = url;
      }
    },
    getUserNickName(state, value) {
      state.userInfo.nickName = value;
    },
    saveMyInfo(state) {
      if (state.userInfo.nickName == "") {
        alert("닉네임을 입력해주세요");
      } else {
        window.localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        alert("정보수정이 완료되었습니다.");
        router.push("/mypage");
      }
    },

    /* 상세  - 좋아요 */
    toggleWish(state, id) {
      let likedList = state.userInfo.liked;

      // userInfo 좋아요 리스트에서 삭제
      const targetInUserInfo = likedList.find((item) => {
        if (item == id) {
          return true;
        }
      });
      const idxInUserInfo = likedList.indexOf(targetInUserInfo);

      // productListData 좋아요 카운팅 조절
      let targetInPrd = state.productListData.filter((item) => id == item.id);
      const idxInPrd = state.productListData.indexOf(targetInPrd[0]);

      if (likedList.includes(id)) {
        state.userInfo.liked.splice(idxInUserInfo, 1);
        state.productListData[idxInPrd].likeCnt--;
      } else {
        state.userInfo.liked.push(id);
        state.productListData[idxInPrd].likeCnt++;
      }

      window.localStorage.setItem(
        "productListData",
        JSON.stringify(state.productListData)
      );
    },
  },
});

export default store;
