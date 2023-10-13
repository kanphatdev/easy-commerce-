<script setup>
import Userlayot from "@/layout/Userlayot.vue";
import { reactive } from "vue";
import { useCartStore } from "@/stores/user/cart";
import { RouterLink,useRouter } from "vue-router";
const cartStore = useCartStore();
const router = useRouter();
const FormData = [
  {
    name: "Email",
    field: "email",
    type:'text'
  },
  {
    name: "Name",
    field: "name",
    type:'text'
  },
  {
    name: "Address",
    field: "address",
    type:'text'
  },
  {
    name: "Notes",
    field: "note",
    type:'textarea'
  },
];

const userFormData = reactive({
  email: "",
  name: "",
  address: "",
  note: "",
});
const payment = () => {
  cartStore.placeorder(userFormData);
  router.push({name:'success'})
};
</script>

<template>
  <main>
    <Userlayot>
      <div class="flex gap-2">
        <section class="flex-auto shadow-md bg-ash rounded-md w-64 p-8">
          <div class="form-control w-full" v-for="form in FormData">
            <label class="label">
              <span class="label-text">{{ form.name }}</span>
            </label>
            <input
              type="text"
              v-model="userFormData[form.field]"
              placeholder="Type here"
              class="input shadow-lg w-full"
              v-if="form.type ==='text'"
            />
            <textarea v-if="form.type ==='textarea'" v-model="userFormData[form.field]" class="textarea textarea-bordered shadow-lg h-full"></textarea>
          </div>
          <button
            class="btn w-full mt-4 shadow-lg bg-maire text-white outline-none hover:text-maire"
            @click="payment"
          >
            ชำระเงิน
          </button>
        </section>
        <section
          class="flex-auto w-32 shadow-md bg-slate-200 rounded-md p-4 px-2"
        >
          <div
            v-for="item in cartStore.items"
            class="flex bg-white m-8 py-4 shadow-lg rounded-lg"
          >
            <div class="flex-1">
              <img :src="item.imageUrl" class="w-full p-4 rounded-lg" />
            </div>
            <div class="flex-1">
              <div class="flex flex-col justify-between h-full">
                <div class="">
                  <div class="">
                    {{ item.name }}
                  </div>
                  <div class="">จำนวน:{{ item.quantity }}</div>
                </div>
                <RouterLink :to="{ name: 'cart' }" class="capitalize"
                  >edit</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="p-4">
            <div class="font-bold capitalize">order summary</div>
            <div class="flex justify-between">
              <div class="my-2">ราคาสินค้าทั้งหมด</div>
              <div class="my-2">{{ cartStore.summaryPrice }}</div>
            </div>
            <div class="flex justify-between">
              <div class="my-4">ราคาส่ง</div>
              <div class="my-4">0</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="flex justify-between">
              <div class="my-4">ราคาทั้งหมด</div>
              <div class="my-4">{{ cartStore.summaryPrice }}</div>
            </div>
        </section>
      </div>
    </Userlayot>
  </main>
</template>
