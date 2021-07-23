<template>
  <div class="card">
    <img class="card-img-top" :src="product.image" alt="Card image cap" />
    <div class="card-body">
      <div class="product-title mt-2">
        <h5 class="card-title text-white m-0">{{ product.title }}</h5>
        <img
          class="_bg-title"
          src="~/assets/images/ourproducts_background_titlecard.png"
          alt=""
        />
      </div>
      <p class="card-text text-white text-center mt-4">
        {{ product.describe }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object || Array,
      default() {},
    },
  },
}
</script>