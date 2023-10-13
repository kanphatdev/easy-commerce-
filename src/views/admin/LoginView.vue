<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
<div class="h-screen flex items-center">
   <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8 rounded-xl">
   <div class="flex flex-col items-center">
    <h1 class="capitalize text-3xl text-center">login</h1>
    <div class="form-control w-full ">
  <label class="label">
    <span class="label-text capitalize">email</span>
 
  </label>
  <input type="text" placeholder="Type your email here" class="input input-bordered w-full " />

</div>
<div class="form-control w-full ">
  <label class="label">
    <span class="label-text capitalize">password</span>
 
  </label>
  <input type="password" placeholder="Type your password here" class="input input-bordered w-full " />

</div>
<RouterLink :to="{name:'admin-dashboard'}" class="capitalize btn bg-maire w-full mt-4 text-white hover:text-maire">
login
</RouterLink>
   </div>
  </div>
</div>
</template>
