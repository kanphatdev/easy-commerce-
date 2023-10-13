import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/user/HomeView.vue'
import CartView from '@/views/user/CartView.vue'
import CheckoutView from '@/views/user/CheckoutView.vue'
import SearchView from '@/views/user/SearchView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import SuccessView from '@/views/user/SuccessView.vue'
 // User site component
 //----------------------------------------------------------------
 // Admin site component
 //----------------------------------------------------------------
 import AdminLoginView from '@/views/admin/LoginView.vue'
 import AdminDashboardView from '@/views/admin/DashboardView.vue'
//manage and view the order
 import OrderListView from '@/views/admin/order/ListView.vue'
 import OrderDetailView from '@/views/admin/order/DetailView.vue'
 //manage and view the product
 import ProductListView from '@/views/admin/product/ListView.vue'
 import ProductUpdateView from '@/views/admin/product/UpdateView.vue'
 //manage and view the User Authentication
 import UserUpdateView from '@/views/admin/user/UpdateView.vue'
 import UserListView from '@/views/admin/user/ListView.vue'
//----------------------------------------------------------------
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // User site routes
    {
      path: '/',
      name: 'root',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/chekout',
      name: 'chekout',
      component: CheckoutView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
     // Admin site routes
     {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLoginView
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView
    },
    {
      path: '/admin/order/update/:id',
      name: 'admin-order-detail',
      component: OrderDetailView
    },
    {
      path: '/admin/orderlist',
      name: 'admin-order-list',
      component: OrderListView
    },
    {
      path: '/admin/product',
      name: 'admin-products-list',
      component: ProductListView
    },
    {
      path: '/admin/product/create/',
      name: 'admin-product-create',
      component: ProductUpdateView
    },
    {
      path: '/admin/product/update/:id',
      name: 'admin-product-update',
      component: ProductUpdateView
    },
    {
      path: '/admin/user/update/:id',
      name: 'admin-user-update',
      component: UserUpdateView
    },
    {
      path: '/admin/user',
      name: 'admin-user-list',
      component: UserListView
    },

  ]
})

export default router
