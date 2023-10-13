<script setup>
//Adminlayot
import Adminlayot from "@/layout/Adminlayot.vue";
//----------------------------------------------------------------
//import and configuration
import { useAdminOrderStore } from "@/stores/admin/order";
import { reactive, ref, onMounted } from "vue";
import { useRoute, RouterLink  } from "vue-router";
//----------------------------------------------------------------
//variable
const adminOrderStore = useAdminOrderStore();
const route = useRoute();

const orderIndex = ref(-1);
const oderData = ref({
  products: [],
});
//----------------------------------------------------------------
//function
onMounted(() => {
  if (route.params.id) {
    orderIndex.value = parseInt(route.params.id);
    const selctedOrder = adminOrderStore.getOrder(orderIndex.value);
    oderData.value = selctedOrder;
  }
});
</script>
<template>
  <Adminlayot>
    <div class="shadow-xl rounded-xl p-8 mt-4">
      <div class="text-3xl font-bold capitalize">order detail ID : {{ orderIndex }}</div>
      <div class="text-xs text-gray-400 capitalize mt-2">
        order list of:{{ oderData.customerName }}
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2 items-center">
        <div class="">
          <div class="font-bold capitalize">order date</div>
          <div class="">{{ oderData.updatedAt }}</div>
        </div>
        <div class="">
          <div class="font-bold capitalize">order number</div>
          <div class="">{{ oderData.no }}</div>
        </div>
        <div class="">
          <div class="font-bold capitalize">payment method</div>
          <div class="">{{ oderData.paymentMethod }}</div>
        </div>
        <div class="">
          <div class="font-bold capitalize">address</div>
          <div class="">{{ oderData.address }}</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-4 mt-4 items-center" v-for="product in oderData.products">
        <div class="mx-auto">
            <img :src="product.imageUrl" alt="" class="rounded-xl  w-40">

        </div>
        <div class="">
            <div class="text-center font-bold p-2">{{ product.name }}</div>
            <div class="text-center">{{ product.description }}</div>
        </div>
        <div class="">จำนวน{{ product.quantity }} ชิ้น</div>
        <div class="capitalize">
            ราคารวม: {{ product.price }} b
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between">
        <div class="">ราคารวมสินค้าทั้งหมด</div>
        <div class="font-bold">{{ oderData.totalPrice }}</div>
      </div>
      <div class="flex justify-end mt-4">
        <RouterLink :to="{name:'admin-order-list'}" class="btn bg-mint text-maire capitalize  hover:bg-neutral-400 ">back</RouterLink>
      </div>
    </div>
  </Adminlayot>
</template>
