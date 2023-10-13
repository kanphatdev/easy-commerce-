<script setup>
import Userlayot from "@/layout/Userlayot.vue";
import Product from "@/components/Product.vue"

// ----------------------------------------------------------------
import {useProductStore} from "@/stores/user/product";
import { useCartStore } from "@/stores/user/cart";
import { useRouter } from "vue-router";
// ----------------------------------------------------------------
//config variables
const cartStore = useCartStore();
const productStore = useProductStore();
const router = useRouter();
// function
const addToCart = (product)=>{
cartStore.addToCart(product)
router.push({name:'cart'})
}
</script>

<template>
  <main>
    <Userlayot>
      <!-- hero -->
      <div class="hero h-96 bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold capitalize">Hello to k shop</h1>
            <p class="py-6 capitalize">trust your intution</p>
          </div>
        </div>
      </div>
      <!-- product shelf -->
      <Product :products="productStore.list"  :addToCart="addToCart"></Product>

    </Userlayot>
  </main>
</template>
