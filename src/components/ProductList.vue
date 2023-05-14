<template>
  <h1 class="visually-hidden">상품리스트</h1>
  <ul class="product-list">
    <li class="product-item">
      <RouterLink to="/view" class="product-item-link">
        <div class="product-item-img">
          <img src="../assets/product-img1.jpg" alt="맥북" />
        </div>
        <div class="product-item-info">
          <p class="product-item-info-title">
            누구나 멋있게 사용할수 있는 아주 비싸고 멋진 맥북입니다. 이거 득템임
          </p>
          <ul>
            <li>중랑구 신내2동</li>
            <li>32분전</li>
          </ul>
          <strong>10,000원</strong>
        </div>
      </RouterLink>
    </li>
    <li class="product-item">
      <RouterLink to="/view" class="product-item-link">
        <div class="product-item-img">
          <img src="../assets/product-img2.jpg" alt="아이패드" />
        </div>
        <div class="product-item-info">
          <p class="product-item-info-title">아이패드</p>
          <ul>
            <li>중랑구 신내2동</li>
            <li>50분전</li>
          </ul>
          <strong>10,000원</strong>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProductList",
};
</script>
