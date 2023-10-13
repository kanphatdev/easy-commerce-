<script setup>
import { RouterLink,useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/user/cart";


//----------------------------------------------------------------
// logic variables
const isLogIn = ref(false);
const searchText = ref("");
// config variables
const router =useRouter();
const cartStore = useCartStore();
//----------------------------------------------------------------
onMounted(() => {
  if (localStorage.getItem("isLogIn")) {
    isLogIn.value = true;
  }
});
const login = () => {
  isLogIn.value = true;
  localStorage.setItem("isLogIn", true);
};
const logout = () => {
  isLogIn.value = false;
  localStorage.removeItem("isLogIn", true);
  localStorage.removeItem("order-data", true);
  localStorage.removeItem("cart-data", true);
  window.location.reload();
  router.push({name:'root'})
};
const handleSearch = (event) => {
if (event.key === "Enter") {
  router.push({
        name: 'search',
        query: {
          q: searchText.value
        }
      })
}
}
</script>
<template>
  <div class="container">
    <div class="navbar bg-neutral-800 shadow">
      <div class="flex-1">
        <RouterLink
          :to="{ name: 'root' }"
          class="btn btn-ghost  text-xl text-white capitalize"
          >k shop</RouterLink
        >
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
            v-model="searchText"
            @keydown="handleSearch"
          />
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  class="text-white"
                />
              </svg>
              <span class="badge badge-sm indicator-item text-white bg-rose-500"
                >{{cartStore.summaryQuantity}}</span
              >
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg capitalize">{{cartStore.summaryQuantity}} goods items</span>
              <span class="text-maire">Subtotal: {{cartStore.summaryPrice}}</span>
              <div class="card-actions">
                <RouterLink
                  :to="{ name: 'cart' }"
                  class="btn bg-ash shadow btn-block"
                  >View cart</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-ghost text-white" v-if="!isLogIn" @click="login">
          login
        </button>
        <div v-else class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <RouterLink :to="{ name: 'profile' }" class="justify-between">
                Profile
              </RouterLink>
            </li>

            <li><a @click="logout">Logout</a></li>
            <li>
              <RouterLink :to="{ name: 'admin-login' }" class="justify-between capitalize">
               sign in as admin
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <slot></slot>
    <footer class="footer p-10 bg-neutral text-neutral-content sticky">
      <nav>
        <header class="footer-title">Services</header>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header class="footer-title">Company</header>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header class="footer-title">Legal</header>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  </div>
</template>
