<template>
  <div class="product-view">
    <h1 class="visually-hidden">상품상세 페이지</h1>

    <div class="product-carousel">
      <img src="../assets/product-img1.jpg" alt="" />
    </div>

    <UserInfoVue />

    <div class="product-info">
      <h3 class="product-info-title">
        누구나 멋있게 사용할수 있는 아주 비싸고 멋진 맥북입니다. 이거 득템임
      </h3>
      <ul class="product-info-cate">
        <li class="cate">전자기기</li>
        <li>32분전</li>
      </ul>

      <div class="product-content">
        <p>
          1년 밖에 사용하지 않은 m2 맥북입니다.<br />
          민트급 상품이고요, 컴퓨터로 작업을 잘 하지 않아 보냅니다
        </p>
      </div>

      <ul class="product-info-popular">
        <li>채팅 2</li>
        <li>관심 13</li>
        <li>조회 421</li>
      </ul>
    </div>

    <div class="product-cta">
      <button aria-label="위시리스트에 추가">
        <i class="xi-heart-o" aria-hidden="true"></i>
      </button>
      <strong>10,000dnjs</strong>

      <button aria-label="채팅하기 버튼">채팅하기</button>
    </div>
  </div>
</template>

<script>
import UserInfoVue from "@/components/UserInfo.vue";

export default {
  name: "ProductView",
  components: {
    UserInfoVue,
  },
};
</script>
