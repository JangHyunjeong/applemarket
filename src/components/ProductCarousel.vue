<template>
  <div class="product-carousel">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        ><img src="../assets/product-img1.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/product-img2.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/product-img1.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/product-img2.jpg" alt=""
      /></swiper-slide>
      ...
    </swiper>
  </div>
</template>

<script>
import { Pagination } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "ProductCarousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>
