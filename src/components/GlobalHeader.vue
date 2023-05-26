<template>
  <div>
    <header
      class="global-header"
      v-if="$route.path == `/view/${$route.params.id}`"
    >
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
          <button type="button" aria-label="공유하기" @click="$emit('copyUrl')">
            <i class="xi-share-alt-o" aria-hidden="true"></i>
          </button>
        </li>
        <li>
          <button type="button" aria-label="메뉴 더보기">
            <i
              class="xi-ellipsis-v"
              aria-hidden="true"
              @click="$emit('toggleHeaderMenu')"
            ></i>
          </button>

          <div class="detail-menu" v-if="HeaderMenuIsShow">
            <button type="button" @click="$emit('editPost', $route.params.id)">
              수정하기
            </button>
            <button
              type="button"
              @click="$emit('deletePost', $route.params.id)"
            >
              삭제하기
            </button>
          </div>
        </li>
      </ul>
    </header>

    <div
      v-else-if="
        $route.path == `/write` || $route.path == `/write/${$route.params.id}`
      "
    ></div>

    <header v-else-if="$route.name" class="global-header">
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
          <h2 class="title">{{ $route.name }}</h2>
        </li>
      </ul>

      <ul class="right-menu">
        <li v-if="`${$route.params.id}== /myinfo`">
          <button
            @click="$emit('saveMyInfo')"
            class="button-submit"
            aria-label="정보수정 완료"
          >
            완료
          </button>
        </li>
      </ul>
    </header>

    <header class="global-header" v-else>
      <h1 class="visually-hidden">애플마켓</h1>
      <ul class="left-menu">
        <li>
          <button arial-lable="내 동네" class="button-local">
            {{ userInfo.locationDong }}
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
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: {
    HeaderMenuIsShow: Boolean,
    userInfo: Object,
  },
  data() {
    return {};
  },
};
</script>
