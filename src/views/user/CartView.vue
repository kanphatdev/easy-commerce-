<script setup>
import Userlayot from "@/layout/Userlayot.vue";
import Close from "@/components/icons/Close.vue";
//----------------------------------------------------------------
//config
import { useCartStore } from "@/stores/user/cart";
import { RouterLink } from "vue-router";
//config variables
const cartStore = useCartStore();
//----------------------------------------------------------------
const changeQuantity = (event,index)=>{
  const newQuantity = parseInt(event.target.value)
  cartStore.updatQuantity(index,newQuantity)
}
</script>

<template>
  <main>
    <Userlayot>
      <h1 class="capitalize mx-4 my-4 text-3xl font-bold">shopping cart</h1>
      <div class="flex gap-2">
        <section class="flex-auto shadow-md bg-ash rounded-md w-64 p-4">
          <div class="alert alert-error" v-if="cartStore.items.length === 0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="capitalize">cart is empty</span>
          </div>
          <div v-else class="flex my-4" v-for="(item, index) in cartStore.items">
            <div class="flex-1 mx-auto">
              <img
                :src="item.imageUrl"
                class="w-full p-10"
              />
            </div>
            <div class="flex-1 mx-auto">
              <div class="flex flex-col justify-between h-full">
                <div class="capitalize">
                  <div class="grid grid-cols-2 relative">
                    <div class="mx-6 my-6 text-center">
                      <div class="">{{ item.name }}</div>
                      <div class="divider"></div>
                      <div class="">{{ item.about }}</div>
                      <div class="divider"></div>
                      <div class="font-bold">{{ item.price }}</div>
                      <div class="divider"></div>
                    </div>
                    <div class="">
                      <select
                        class="select w-full outline-none"
                        @change="changeQuantity($event,index)"
                        v-model="item.quantity"
                      >
                        <option v-for="quantity in [1, 2, 3, 4, 5]">
                          {{ quantity }}
                        </option>
                      </select>
                    </div>
                    <div
                      class="absolute top-0 ring-0 cursor-pointer"
                      @click="cartStore.removeItemInCart(index)"
                    >
                      <Close></Close>
                    </div>
                  </div>
                </div>
                <div class="font-bold capitalize">in stock</div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex-auto w-32 shadow-md bg-slate-200 rounded-md p-4">
          <div class="text-xl capitalize font-bold">order summary</div>
          <div class="my-4">
            <div class="flex justify-between py-2">
              <div class="">ราคาสินค้าทั้งหมด</div>
              <div class="font-bold">{{cartStore.summaryPrice}}</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between py-2">
              <div class="">ราคาค่าส่ง</div>
              <div class="font-bold">0</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between py-2">
              <div class="">ราคารวมทั้งหมด</div>
              <div class="font-bold">{{cartStore.summaryPrice}}</div>
            </div>
            <div class="divider"></div>
            <RouterLink :to="{name:'chekout'}" class="btn bg-maire text-ash w-full hover:text-maire hover:bg-ash shadow mt-4">ชำระเงิน</RouterLink>
          </div>
        </section>
      </div>
    </Userlayot>
  </main>
</template>
