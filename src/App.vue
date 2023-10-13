<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
//config
import { useCartStore } from "@/stores/user/cart";
import { useProductStore } from "@/stores/user/product";
import { useEventStore } from "@/stores/event";
//config variables
const cartStore = useCartStore();
const productStore = useProductStore();
const eventStore = useEventStore();
//function
onMounted(() => {
  cartStore.loadCart();
  productStore.loadProduct();
});
</script>

<template>
  <div class="toast toast-top toast-start" v-if="eventStore.alert">
    <div class="alert" :class="`alert-${eventStore.data.status}`">
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>
  <RouterView />
</template>
