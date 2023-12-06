import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


import HomePage from './components/Home.vue';
import LoginPage from './components/Login.vue'
import ProductDetails from './components/ProductDetails.vue'
import ProductsCategory from './components/ProductsCategory.vue'
import adminDashboard from './components/Admin.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/products/:productId', component: ProductDetails,props:true },
  { path: '/products/category/:categoryId', component: ProductsCategory,props:true },
  { path: '/admin', component: adminDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app')


