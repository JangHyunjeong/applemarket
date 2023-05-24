<template>
  <div>
    <WriteHeader @saveData="saveData()" />
    <form action="">
      <AttachPhoto
        :imgUrlArray="imgUrlArray"
        :imgUrlArrayLength="imgUrlArrayLength"
        :isAttached="isAttached"
        @getImageUrl="getImageUrl($event)"
        @deletePhoto="deletePhoto($event)"
      />
      <InputGroup
        @getTitle="getTitle($event)"
        @getPrice="getPrice($event)"
        @getContent="getContent($event)"
        :title="title"
        :price="price"
        :content="content"
      />
    </form>
  </div>
</template>

<script>
import WriteHeader from "../components/WriteHeader.vue";
import AttachPhoto from "../components/AttachPhoto.vue";
import InputGroup from "../components/InputGroup.vue";

export default {
  name: "ProductWrite",
  data() {
    return {
      id: 0,
      title: "",
      price: 0,
      content: "",
      imgUrlArray: [],
      imgUrlArrayLength: 0,
      isAttached: false,
    };
  },
  components: {
    WriteHeader,
    AttachPhoto,
    InputGroup,
  },
  props: {
    productListData: Array,
  },
  methods: {
    getTitle(value) {
      this.title = value;
    },

    getPrice(value) {
      this.price = value;
    },

    getContent(value) {
      this.content = value;
    },

    // 사진 첨부
    getImageUrl(e) {
      const files = e.files;
      if (files.length <= 10 && this.imgUrlArray.length + files.length <= 10) {
        for (const [key, value] of Object.entries(files)) {
          const url = URL.createObjectURL(value);
          this.imgUrlArray.push(url);
          this.imgUrlArrayLength = this.imgUrlArray.length;
        }
      } else {
        alert("사진은 최대 10장까지 첨부할 수 있습니다.");
      }

      if (this.imgUrlArray != null) {
        this.isAttached = true;
      }
    },

    // 사진 삭제
    deletePhoto(idx) {
      this.imgUrlArray.splice(idx, 1);
      this.imgUrlArrayLength = this.imgUrlArray.length;

      if (this.imgUrlArray == 0) {
        this.isAttached = false;
        this.imgUrlArray = [];
      }
    },

    // 작성된 데이터 저장 (완료버튼 클릭시)
    saveData() {
      let dataArr = [];
      let oldArr = JSON.parse(window.localStorage.getItem("productListData"));

      // localStorage상에 productListData 유무 체크
      if (oldArr === null) {
        oldArr = [];
      } else {
        dataArr = oldArr;
      }

      // 필수값 처리
      if (this.imgUrlArrayLength == 0) {
        alert("사진을 첨부해주세요.");
      } else if (this.title == "") {
        alert("제목을 입력해주세요.");
      } else if (this.price == "") {
        alert("가격을 입력해주세요.");
      } else if (this.content == "") {
        alert("내용을 입력해주세요.");
      } else {
        // 새로 생성된 데이터
        // 하드코딩된 데이터 추후 수정 후 추가하기
        const datetime = new Date();
        const data = {
          id: this.id,
          title: this.title,
          price: this.price,
          content: this.content,
          category: "전자기기",
          productMainImage: this.imgUrlArray[0],
          productImages: this.imgUrlArray,
          userId: "토끼가 좋아",
          userLocation: "노원구 공릉동",
          userImage: require("../assets/user01.jpg"),
          liked: false,
          chatCnt: 2,
          likeCnt: 1,
          viewCnt: 100,
          datetime: datetime.toLocaleTimeString(),
        };

        // 새로 생성된 데이터를 배열에 추가
        dataArr.unshift(data);
        // localStorage에 저장
        window.localStorage.setItem("productListData", JSON.stringify(dataArr));
        this.$router.push("/");
      }
    },

    // 수정하기 데이터 불러오기
    getCustomData() {},
  },

  mounted() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;

      // 수정할 데이터 불러오기
      let customList = JSON.parse(
        window.localStorage.getItem("productListData")
      );

      console.log(customList);

      const findItem = function findItem(item) {
        if (item.id === this.id) {
          return true;
        }
      };

      const target = customList.find(findItem);
      const findIdx = customList.indexOf(target);
      console.log("findIdx :", findIdx);
      console.log("target :", target);
      this.title = customList[findIdx].title;
      this.contents = customList[findIdx].contents;
    } else {
      console.log("작성모드");
      // 데이터의 id붙이기
      if (this.productListData === null) {
        this.id = 0;
      } else {
        const lastId = this.productListData[0].id;
        this.id = lastId + 1;
      }
    }
  },
};
</script>
