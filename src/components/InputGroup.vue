<template>
  <div class="input-group">
    <input
      @input="$emit('getTitle', $event.target.value)"
      class=""
      type="text"
      placeholder="제목"
    />
    <input
      @input="$emit('getPrice', $event.target.value)"
      type="number"
      placeholder="가격"
    />
    <textarea
      @input="$emit('getContent', $event.target.value)"
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="게시글 내용을 작성해주세요(가품 및 판매 금지 물품은 게시가 제한될 수 있어요)"
    ></textarea>
  </div>
</template>
<script>
export default {
  name: "InputGroup",
  props: {
    title: String,
    price: Number,
    content: String,
  },
};
</script>
