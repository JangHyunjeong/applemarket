<template>
  <h1 class="visually-hidden">상품리스트</h1>
  <ul class="product-list">
    <!-- <li class="product-item">
      <RouterLink to="/view" class="product-item-link">
        <div class="product-item-img">
          <img src="../assets/product-img1.jpg" alt="맥북" />
        </div>
        <div class="product-item-info">
          <p class="product-item-info-title">
            {{ productListData[0].title }}
          </p>
          <ul>
            <li>중랑구 신내2동</li>
            <li>{{ productListData[0].datetime }}</li>
          </ul>
          <strong>{{ productListData[0].price }}</strong>
        </div>
      </RouterLink>
    </li> -->

    <li class="product-empty" v-if="productListData === null">
      등록된 상품이 없습니다.
    </li>

    <li
      class="product-item"
      v-else
      v-for="(item, idx) in productListData"
      :key="idx"
    >
      <RouterLink to="/view" class="product-item-links">
        <div class="product-item-img">
          <!-- <img src="../assets/product-img1.jpg" alt="맥북" /> -->
          <img :src="`${item.productMainImage}`" :alt="`${item.title}`" />
        </div>
        <div class="product-item-info">
          <p class="product-item-info-title">
            {{ item.title }}
          </p>
          <ul>
            <li>{{ item.userLocation }}</li>
            <li>{{ item.datetime }}</li>
          </ul>
          <strong>{{ item.price }}</strong>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    productListData: Array,
  },
};
</script>
