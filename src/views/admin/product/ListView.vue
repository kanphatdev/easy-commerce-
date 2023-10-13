<script setup>
//layout
import Adminlayot from "@/layout/Adminlayot.vue";
import Table from "@/components/Table.vue";
// ----------------------------------------------------------------
//configuration
import { RouterLink } from "vue-router";
import { useAdminProductStore } from "@/stores/admin/product";
import { onMounted } from "vue";
//----------------------------------------------------------------
//icon
import Edit from "@/components/icons/Edit.vue";
import Trash from "@/components/icons/Trash.vue";
//----------------------------------------------------------------
//variable
const adminProduct = useAdminProductStore();
//----------------------------------------------------------------
//function
onMounted(() => {
  adminProduct.loadProduct();
});
const removeProduct = (index) => {
  adminProduct.removeProduct(index);
};
</script>
<template>
  <Adminlayot>
    <div class="flex items-center justify-between my-4">
      <div class="capitalize text-3xl font-bold">product</div>
      <div class="">
        <RouterLink
          :to="{ name: 'admin-product-create' }"
          class="capitalize btn btn-neutral"
          >add new</RouterLink
        >
      </div>
    </div>
<Table :headers="['name','image','price','quantity','status','update at','action']">
  <tr v-for="(product, index) in adminProduct.list">
            <th class="text-center">{{ product.name }}</th>
            <td>
              <div class="avatar grid justify-items-center">
                <div class="w-12 rounded-full">
                  <img :src="product.imageUrl" />
                </div>
              </div>
            </td>
            <td class="text-center">{{ product.price }}</td>
            <td class="text-center">
              {{ product.remainQuantity }}/{{ product.quantity }}
            </td>
            <td class="text-center">
              <div class="badge" :class="product.status === 'open'?'badge-success':'badge-error'">{{ product.status }}</div>
            </td>
            <td class="text-center">{{ product.updatedAt }}</td>

            <td>
            <div class="flex justify-center">
              <RouterLink :to="{ name: 'admin-product-update', params: { id: index } }">
                <button class="btn btn-square btn-ghost text-orange-400">
                  <Edit></Edit>
                </button>
              </RouterLink>

              <button class="btn btn-square btn-ghost text-red-400" @click="removeProduct(index)">
                <Trash></Trash>
              </button>
            </div>
            </td>
          </tr>
</Table>
  </Adminlayot>
</template>
