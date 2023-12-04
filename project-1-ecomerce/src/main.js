import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


import HomePage from './components/Home.vue';
import LoginPage from './components/Login.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app')


