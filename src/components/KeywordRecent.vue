<template>
  <div class="keyword-recent">
    <header>
      <h3>최근검색어</h3>
      <button type="button" aria-label="최근 검색어 모두 지우기">
        모두 지우기
      </button>
    </header>

    <ul class="keyword-list">
      <li>
        <button type="button" class="keyword">아레나</button>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
      </li>
      <li>
        <button type="button" class="keyword">마르디</button>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
      </li>
      <li>
        <button type="button" class="keyword">스타벅스</button>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
      </li>
      <li>
        <button type="button" class="keyword">
          아메리카노 키워드가 아주아주 길때를 대비하자고
        </button>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
      </li>
      <li>
        <button type="button" class="keyword">가방</button>
        <button type="button" class="button-delete">
          <i class="xi-close"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KeywordRecent",
};
</script>
