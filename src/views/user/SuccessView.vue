<script setup>
import Userlayot from "@/layout/Userlayot.vue";
//----------------------------------------------------------------
import { onMounted, ref } from "vue";
import { useCartStore } from "@/stores/user/cart";
//----------------------------------------------------------------
const cartStore = useCartStore();
const orderData = ref({});
//----------------------------------------------------------------
//function
onMounted(async () => {
  console.log(cartStore.checkout);
  await cartStore.loadCheckout();

  if (cartStore.checkout.orderNumber) {
    orderData.value = cartStore.checkout;
  }
});
</script>

<template>
  <main>
    <Userlayot>
      <div class="border border-base-200 shadow-xl max-w-2xl mx-auto p-8 my-4 rounded-xl">
        <div class="">
          <div class="capitalize text-2xl font-bold">
            your order successfull
          </div>
          <div class="capitalize">hi {{ orderData.name }}</div>
          <div class="">เตรียมรอรับสินค้า</div>
          <div class="divider"></div>
          <div class="grid grid-cols-4 gap-2">
            <div class="text-center">
              <div class="font-bold capitalize text-center">order date</div>
              <div class="text-sm p-2">{{ orderData.createDate }}</div>
            </div>
            <div class="text-center">
              <div class="capitalize font-bold">order number</div>
              <div class="p-2">{{ orderData.orderNumber }}</div>
            </div>
            <div class="text-center">
              <div class="capitalize font-bold">payment method</div>
              <div class="p-2">{{ orderData.paymentMethod }}</div>
            </div>
            <div class="text-center">
              <div class="capitalize font-bold">address</div>
              <div class="p-2">{{ orderData.address }}</div>
            </div>
          </div>
          <div class="divider"></div>
          <div
            v-for="product in orderData.products"
            class="grid grid-cols-4 gap-2 mb-4 items-center"
          >
            <div class="">
              <img :src="product.imageUrl" class="w-full" />
            </div>
            <div class="font-bold">{{ product.name }}</div>
            <div class="">จำนวน:{{ product.quantity }}</div>
            <div class="">ราคารวม:{{ product.price * product.quantity }}</div>
          </div>
          <div class="divider"></div>
          <div class="flex justify-between mt-4">
            <div class="">ราคาสินค้าทั้งหมด</div>
            <div class="font-bold">{{orderData.totalPrice}}</div>
          </div>
          <div class="flex justify-between mt-4">
            <div class="">ราคาค่าส่ง</div>
            <div class="font-bold">0</div>
          </div>
          
          <div class="divider"></div>
          <div class="flex justify-between mt-4">
            <div class="">รวมราคาสินค้าทั้งสิ้น</div>
            <div class="font-bold">{{orderData.totalPrice}}</div>
          </div>
          <div class="divider"></div>
          <div class="">ขอบคุณที่ซื้อสินค้าของเรา</div>
        </div>
      </div>
    </Userlayot>
  </main>
</template>
