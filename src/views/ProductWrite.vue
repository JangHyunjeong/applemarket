<template>
  <div>
    <WriteHeader @saveData="saveData()" />
    <form action="">
      <AttachPhoto
        :imgUrlArray="imgUrlArray"
        :isAttached="isAttached"
        @getImageUrl="getImageUrl($event)"
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
  created() {
    // 데이터의 id붙이기
    if (this.productListData === null) {
      this.id = 0;
    } else {
      const lastId = this.productListData[0].id;
      console.log(lastId);
      this.id = lastId + 1;
    }
  },
  methods: {
    getTitle(value) {
      this.title = value;
    },
    getPrice(value) {
      this.price = Number(value);
    },
    getContent(value) {
      this.content = value;
    },

    // 파일 첨부
    getImageUrl(e) {
      const files = e.files;

      for (const [key, value] of Object.entries(files)) {
        let url = URL.createObjectURL(value);
        this.imgUrlArray.unshift(url);
      }

      if (this.imgUrlArray != null) {
        this.isAttached = true;
      }
    },

    // 작성된 데이터 저장
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
        chat: 2,
        wish: 1,
        views: 100,
        datetime: datetime.toLocaleTimeString(),
      };

      // 새로 생성된 데이터를 배열에 추가
      dataArr.unshift(data);
      // localStorage에 저장
      window.localStorage.setItem("productListData", JSON.stringify(dataArr));
      this.$router.push("/");
    },
  },
};
</script>
