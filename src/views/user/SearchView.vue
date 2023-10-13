<script setup>
import Userlayot from "@/layout/Userlayot.vue"
import ProductSearch from "@/components/ProductSearch.vue"
//----------------------------------------------------------------
//configuration
import { onMounted,ref,computed,watch } from "vue";
import { useRoute,useRouter } from "vue-router";
import {useProductStore} from "@/stores/user/product";
import { useCartStore } from "@/stores/user/cart";
//----------------------------------------------------------------
//configuration variables
const route = useRoute()
const productStore = useProductStore()
const searcText = ref('')
const cartStore = useCartStore();
const router = useRouter();
//function

const filterProducts = computed(()=>{
  return productStore.filterProducts(searcText.value)
})
watch(()=> route.query.q,(newsearchText)=>{
  searcText.value = newsearchText
},{immediate:true})
const addToCart = (product)=>{
cartStore.addToCart(product)
router.push({name:'cart'})
}
//----------------------------------------------------------------

</script>

<template>
  <main>
 <Userlayot>
  <div class="chat-bubble chat-bubble-secondary my-4 mx-4 capitalize">search<kbd class="kbd kbd-lg mx-4">{{ searcText }}</kbd></div>
<ProductSearch :products="filterProducts"
 :addToCart="addToCart"></ProductSearch>
 </Userlayot>

  </main>
</template>