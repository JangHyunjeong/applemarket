<template>
  <form action="">
    <AttachPhoto />

    <div class="input-group">
      <input class="" type="text" placeholder="제목" />
      <input type="number" placeholder="가격" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="게시글 내용을 작성해주세요(가품 및 판매 금지 물품은 게시가 제한될 수 있어요)"
      ></textarea>
    </div>
  </form>
</template>

<script>
import AttachPhoto from "../components/AttachPhoto.vue";

export default {
  name: "ProductWrite",
  components: {
    AttachPhoto,
  },
};
</script>
