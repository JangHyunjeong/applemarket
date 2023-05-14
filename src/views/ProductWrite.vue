<template>
  <WriteHeader @saveData="saveData()" />
  <form action="">
    <AttachPhoto />
    <InputGroup
      @getTitle="getTitle($event)"
      @getPrice="getPrice($event)"
      @getContent="getContent($event)"
      :title="title"
      :price="price"
      :content="content"
    />
  </form>
</template>

<script>
import WriteHeader from "../components/WriteHeader.vue";
import AttachPhoto from "../components/AttachPhoto.vue";
import InputGroup from "../components/InputGroup.vue";

export default {
  name: "ProductWrite",
  data() {
    return {
      title: "",
      price: 0,
      content: "",
    };
  },
  components: {
    WriteHeader,
    AttachPhoto,
    InputGroup,
  },
  mounted() {},

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

    saveData() {
      let dataArr = [];
      let oldArr = JSON.parse(window.localStorage.getItem("productListData"));

      // localStorage상에 productListData 유무 체크
      if (oldArr === null) {
        oldArr = [];
      } else {
        dataArr = oldArr;
      }

      // 새로 생성된 데이터
      // 하드코딩된 데이터 추후 수정 후 추가하기
      const datetime = new Date();
      const data = {
        title: this.title,
        price: this.price,
        content: this.content,
        productMainImage: require("../assets/product-img1.jpg"),

        productImages: "",
        userId: "토끼가 좋아",
        userLocation: "노원구 공릉동",
        userImage: [
          require("../assets/product-img1.jpg"),
          require("../assets/product-img2.jpg"),
          require("../assets/product-img1.jpg"),
          require("../assets/product-img2.jpg"),
        ],
        chat: 2,
        wish: 1,
        views: 100,
        datetime: datetime.toLocaleTimeString(),
      };

      // 새로 생성된 데이터를 배열에 추가
      dataArr.push(data);
      // localStorage에 저장
      window.localStorage.setItem("productListData", JSON.stringify(dataArr));
    },
  },
  updated() {},
};
</script>
