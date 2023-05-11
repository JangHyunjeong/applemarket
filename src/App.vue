<template>
  <div class="layouts">
    <GlobalHeader />

    <GlobalTabBar />

    <button aria-label="글쓰기">
      <i class="xi-plus" aria-hidden="true"></i>
    </button>

    <!--상품리스트-->
    <!-- <div class="product-list-wrap">
      <h1 class="visually-hidden">상품리스트</h1>
      <ul class="product-list">
        <li class="product-item">
          <a href="">
            <div class="product-item-img">
              <img src="./assets/product-img1.jpg" alt="맥북" />
            </div>
            <div class="product-info">
              <p class="product-title">맥북</p>
              <ul>
                <li>중랑구 신내2동</li>
                <li>32분전</li>
              </ul>
              <strong>10,000원</strong>
            </div>
          </a>
        </li>
        <li class="product-item">
          <a href="">
            <div class="product-item-img">
              <img src="./assets/product-img2.jpg" alt="아이패드" />
            </div>
            <div class="product-info">
              <p class="product-title">아이패드</p>
              <ul>
                <li>중랑구 신내2동</li>
                <li>50분전</li>
              </ul>
              <strong>10,000원</strong>
            </div>
          </a>
        </li>
      </ul>
    </div> -->
    <!--//상품리스트-->
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalTabBar from "./components/GlobalTabBar.vue";

export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalTabBar,
  },
};
</script>

<style></style>
