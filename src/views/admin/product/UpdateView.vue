<script setup>
import Adminlayot from "@/layout/Adminlayot.vue";
//----------------------------------------------------------------
import { onMounted, reactive, ref } from "vue";
//----------------------------------------------------------------
import { useRouter, useRoute } from "vue-router";
import { useAdminProductStore } from "@/stores/admin/product";
//----------------------------------------------------------------
const adminProductStore = useAdminProductStore();
const router = useRouter();
const route = useRoute();
const productIndex = ref(-1);
const mode = ref("ADD");
// array variables
const formData = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Image",
    field: "imageUrl",
  },
  {
    name: "Price",
    field: "price",
  },
  {
    name: "Quantity",
    field: "quantity",
  },
  {
    name: "About",
    field: "about",
  },
];
const productData = reactive({
  name: "",
  imageUrl: "",
  price: 0,
  quantity: 0,
  about: "",
  status: "",
});
//----------------------------------------------------------------
const updateProduct = () => {
  if (mode.value ==='EDIT') {
    console.log(productData);
  adminProductStore.updateProduct(productIndex.value,productData);
  }else{
    console.log(productData);
  adminProductStore.addProduct(productData);

  }
  router.push({ name: "admin-products-list" });
};
onMounted(() => {
  if (route.params.id) {
    productIndex.value = parseInt(route.params.id);
    mode.value = "EDIT";

    const selectedProduct = adminProductStore.getProduct(productIndex.value);
    productData.name = selectedProduct.name;
    productData.imageUrl = selectedProduct.imageUrl;
    productData.price = selectedProduct.price;
    productData.quantity = selectedProduct.quantity;
    productData.about = selectedProduct.about;
    productData.status = selectedProduct.status;
    console.log("selected product", selectedProduct);
  }
});
</script>
<template>
  <Adminlayot>
    <div class="shadow-xl p-8 rounded-xl mt-4">
      <div class="uppercase text-1xl">product {{ mode }}</div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2">
        <div class="form-control w-full" v-for="form in formData">
          <label class="label">
            <span class="label-text">{{ form.name }}</span>
          </label>
          <div class="" v-if="productData[form.field] === 'about'">
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ form.name }}</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                v-model="productData[form.field]"
              ></textarea>
            </div>
          </div>
          <input
            v-else
            type="text"
            v-model="productData[form.field]"
            class="input input-bordered w-full"
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text capitalize">status</span>
          </label>
          <select class="select select-bordered" v-model="productData.status">
            <option disabled selected>choose status</option>
            <option value="open">open</option>
            <option value="close">close</option>
          </select>
        </div>
      </div>
      <div class="mt-4 flex justify-end gap-3">
        <RouterLink :to="{name:'admin-products-list'}">
          <button class="btn btn-ghost capitalize">back</button>
        </RouterLink>
     
        <button
          class="btn shadow text-white bg-maire hover:bg-neutral capitalize"
          @click="updateProduct()"
        >
          {{ mode }}
        </button>
      </div>
    </div>
  </Adminlayot>
</template>
