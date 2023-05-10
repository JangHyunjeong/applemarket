<template>
  <div>
    <!-- 헤더 -->
    <header class="">
      <h1 class="visually-hidden">검색</h1>
      <button arial-lable="내 동네">중화동</button>

      <button aria-label="검색">
        <i class="xi-search" aria-hidden="true"></i>
      </button>
      <button aria-label="메뉴">
        <i class="xi-bars" aria-hidden="true"></i>
      </button>
      <button aria-label="알람">
        <i class="xi-bell-o" aria-hidden="true"></i>
      </button>
    </header>
    <!-- //헤더 -->

    <!-- 하단 탭바 -->
    <nav class="tab-bar">
      <h1 class="visually-hidden">탭바</h1>
      <ul class="tab-bar-list">
        <li class="tab-bar-item">
          <button aria-label="홈" class="tab-bar-button">
            <i class="xi-home-o"></i>
            <span class="txt">홈</span>
          </button>
        </li>
        <li class="tab-bar-item">
          <button aria-label="채팅" class="tab-bar-button">
            <i class="xi-forum-o"></i>
            <span class="txt">채팅</span>
          </button>
        </li>
        <li class="tab-bar-item">
          <button aria-label="나의사과" class="tab-bar-button">
            <i class="xi-user-oㄴ"></i>
            <span class="txt">나의사과</span>
          </button>
        </li>
      </ul>
    </nav>
    <!-- // 하단 탭바 -->

    <button aria-label="글쓰기">
      <i class="xi-plus" aria-hidden="true"></i>
    </button>

    <!--상품리스트-->
    <div class="product-list-wrap">
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
    </div>
    <!--//상품리스트-->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
