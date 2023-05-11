<template>
  <div class="attach-photo">
    <ul class="attach-photo-list">
      <li>
        <button class="button-attach" aria-label="사진 첨부하기" type="button">
          <i class="xi-camera"></i>
          <!-- 첨부된 사진이 없을때 
          <span>사진 첨부하기</span> -->
          <span>2 / 10</span>
        </button>
      </li>
      <li>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
        <img src="../assets/product-img1.jpg" alt="" />
      </li>
      <li>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
        <img src="../assets/product-img1.jpg" alt="" />
      </li>
      <li>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
        <img src="../assets/product-img1.jpg" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AttachPhoto",
};
</script>
