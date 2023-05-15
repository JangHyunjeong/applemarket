<template>
  <div class="attach-photo">
    <ul class="attach-photo-list">
      <li>
        <label
          for="buttonAttach"
          class="button-attach"
          aria-label="사진 첨부하기"
        >
          <i class="xi-camera"></i>
          <span v-if="isAttached === false">사진 첨부하기</span>
          <span v-else>2 / 10</span>
        </label>
        <input
          type="file"
          multiple
          id="buttonAttach"
          @change="$emit('getImageUrl', $event.target)"
        />
      </li>
      <li v-if="isAttached" v-for="(item, idx) in imgUrlArray" :key="idx">
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
        <img :src="`${item}`" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AttachPhoto",
  data() {
    return {};
  },
  props: {
    imgUrlArray: Array,
    isAttached: Boolean,
  },
};
</script>
