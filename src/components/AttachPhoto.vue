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
          <span>사진 첨부하기</span>
          <!-- 첨부된 사진이 있을때 
          <span>2 / 10</span> -->
        </label>
        <input
          type="file"
          multiple
          id="buttonAttach"
          @change="$emit('getImageUrl', $event.target)"
        />
      </li>
      <li v-if="isAttached">
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
        <img :src="`${imgUrl}`" alt="" />
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
    imgUrl: String,
    isAttached: Boolean,
  },
};
</script>
