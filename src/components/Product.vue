<template>
  <div class="flex flex-row gap-2 justify-center my-4">
    <div
      class="card w-96 bg-base-100 shadow-xl image-full "
      v-for="product in products"
    
    >
      <figure>
        <img :src="product.imageUrl" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{product.name}}</h2>
       <div class="h-screen">{{ product.about }}</div>
       <div class=""></div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="addToCart(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  products: Array,
  addToCart: Function,
});
</script>
