<template>
  <header class="global-header" v-if="$route.path == '/view'">
    <h1 class="visually-hidden">애플마켓</h1>
    <ul class="left-menu">
      <li>
        <button
          @click="$router.go(-1)"
          arial-lable="뒤로가기"
          class="button-back"
        >
          <i class="xi-angle-left"></i>
        </button>
      </li>
      <li>
        <button
          @click="$router.push('/')"
          arial-lable="메인으로 가기"
          class="button-home"
        >
          <i class="xi-home-o"></i>
        </button>
      </li>
    </ul>

    <ul class="right-menu">
      <li>
        <button aria-label="공유하기">
          <i class="xi-share-alt-o" aria-hidden="true"></i>
        </button>
      </li>
      <li>
        <button aria-label="메뉴 더보기">
          <i class="xi-ellipsis-v" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </header>

  <header class="global-header" v-else-if="$route.path == '/write'">
    <h1 class="visually-hidden">애플마켓</h1>
    <ul class="left-menu">
      <li>
        <button
          @click="$router.go(-1)"
          arial-lable="뒤로가기"
          class="button-back"
        >
          <i class="xi-angle-left"></i>
        </button>
      </li>
      <li>
        <h1 class="title">중고거래 글쓰기</h1>
      </li>
    </ul>

    <ul class="right-menu">
      <li>
        <button class="button-submit" aria-label="글쓰기 작성완료">완료</button>
      </li>
    </ul>
  </header>

  <header class="global-header" v-else>
    <h1 class="visually-hidden">애플마켓</h1>
    <ul class="left-menu">
      <li>
        <button arial-lable="내 동네" class="button-local">
          중화동
          <i class="xi-angle-down"></i>
        </button>
      </li>
    </ul>

    <ul class="right-menu">
      <li>
        <button aria-label="검색">
          <i class="xi-search" aria-hidden="true"></i>
        </button>
      </li>
      <li>
        <button aria-label="메뉴">
          <i class="xi-bars" aria-hidden="true"></i>
        </button>
      </li>
      <li>
        <button aria-label="알람">
          <i class="xi-bell-o" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "GlobalHeader",
};
</script>
