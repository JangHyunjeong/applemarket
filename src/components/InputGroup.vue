<template>
  <div class="input-group">
    <input
      @input="$emit('getTitle', $event.target.value)"
      class=""
      type="text"
      placeholder="제목"
      required
    />

    <div class="price-input">
      <input
        @input="$emit('getPrice', $event.target.value)"
        type="number"
        placeholder="가격"
        required
      />
      <span v-if="price == ''" class="won color-gray">￦</span>
      <span v-else class="won">￦</span>
    </div>

    <textarea
      @input="$emit('getContent', $event.target.value)"
      name=""
      cols="30"
      rows="10"
      required
      placeholder="게시글 내용을 작성해주세요(가품 및 판매 금지 물품은 게시가 제한될 수 있어요)"
    ></textarea>
  </div>
</template>
<script>
export default {
  name: "InputGroup",
  props: {
    title: String,
    price: String,
    content: String,
  },
};
</script>
