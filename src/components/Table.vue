<script setup>
import { defineProps } from "vue";
defineProps({
    headers:Array
})
</script>
<template>
<div class="overflow-x-auto">
    <table class="table">
    <!-- head -->
    <thead>
        <tr class="text-center">
            <th class="capitalize text-center" v-for="header in headers">{{header}}</th>
            
          </tr>
    </thead>
    <tbody>
      <slot></slot>
 
    </tbody>
  </table>
</div>
</template>