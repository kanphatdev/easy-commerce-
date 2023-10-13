<script setup>
import {ref,onMounted} from "vue";
import { RouterLink,useRoute } from "vue-router";
const menus = [
  {
    name: "dashboard",
    routeName: "admin-dashboard",
  },
  {
    name: "user",
    routeName: "admin-user-list",
  },
  {
    name: "product",
    routeName: "admin-products-list",
  },
  {
    name: "order",
    routeName: "admin-order-list",
  },
  {
    name: "logout",
    routeName: "admin-login",
  },
];
const activeMenu = ref('');
const route = useRoute();
onMounted(()=>{
    activeMenu.value = route.name
    console.log(route.name);
})
</script>
<template>
  <div class="drawer drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content mx-4">
      <!-- Page content here -->
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li>
          <RouterLink :to="{ name: 'admin-dashboard' }" class="btn btn-ghost text-xl capitalize">k shop backoffice</RouterLink>
        </li>
        <!-- Sidebar content here -->
        <li class="capitalize" v-for="menu in menus">
          <RouterLink :to="{ name: menu.routeName }" :class="menu.routeName === activeMenu ? 'active':''">
            {{ menu.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
