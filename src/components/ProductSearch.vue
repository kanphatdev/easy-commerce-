<template>
  <section
    class="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 gap-4 my-4"
  >
    <div
      v-for="product in products"
      :key="product.id"
      class="card w-96 bg-base-100 shadow-xl"
    >
      <figure class="px-10 pt-10">
        <img
        :src="product.imageUrl"
          class="rounded-xl w-full"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>{{ product.about }}</p>
        <div class="card-actions">
          <button class="btn bg-emerald-300 shadow" @click="addToCart(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  products:Array,
  addToCart:Function
 });
</script>
