<script setup>
import Adminlayot from "@/layout/Adminlayot.vue";
import Table from "@/components/Table.vue";
//----------------------------------------------------------------
import { useAdminOrderStore } from "@/stores/admin/order";
//----------------------------------------------------------------
import { RouterLink } from "vue-router";
//----------------------------------------------------------------
const adminOrderStore = useAdminOrderStore();
//----------------------------------------------------------------
import Eye from "@/components/icons/Eye.vue";
</script>
<template>
  <Adminlayot>
    <div class="flex items-center justify-between my-4">
      <div class="capitalize text-3xl font-bold">order list</div>
    </div>
    <Table :headers="['customer name', 'price', 'status', 'updated at', 'action']">
      <tr v-for="(order,index) in adminOrderStore.list" class="text-center">
        <td>{{ order.customerName }}</td>
        <td>{{ order.totalPrice }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order.updatedAt }}</td>
        <td>
            <div class="flex justify-center">
              <RouterLink :to="{ name: 'admin-order-detail', params: { id: index } }">
                <button class="btn btn-square btn-ghost ">
                  <Eye></Eye>
                </button>
              </RouterLink>
             
            </div>
        </td>
      </tr>
    </Table>
  </Adminlayot>
</template>
