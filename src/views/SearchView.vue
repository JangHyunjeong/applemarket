<template>
  <div>
    <header class="global-header search-header">
      <h1 class="visually-hidden">애플마켓</h1>

      <h2 class="visually-hidden">검색하기</h2>

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
      </ul>
      <ul class="right-menu">
        <li>
          <div class="deletable-input">
            <input
              type="text"
              class="input-basic h40"
              aria-label="검색어 입력"
              placeholder="검색어를 입력해주세요"
            />
            <button class="button-delete" aria-label="전체 지우가">
              <i class="xi-close"></i>
            </button>
          </div>
        </li>
      </ul>
    </header>

    <!-- case 1. 검색버튼 클릭, 인풋 수정시 나타나는 컴포넌트 -->
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

    <!-- case 2. 완료버튼 클릭시 나타나는 상품리스트 컴포넌트 -->
    <div class="search-result">
      <h3>검색결과</h3>
    </div>
  </div>
</template>
