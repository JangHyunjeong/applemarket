<template>
  <header class="global-header">
    <h1 class="visually-hidden">검색</h1>
    <div class="left-menu">
      <button arial-lable="내 동네" class="button-local">
        중화동
        <i class="xi-angle-down"></i>
      </button>
    </div>

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
  name: "Header",
};
</script>
