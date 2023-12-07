import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import BaseCard from './components/Ui/BaseCard.vue'
import BaseButton from './components/Ui/BaseButton.vue'
import BaseBadge from './components/Ui/BaseBadge.vue'


const app=createApp(App)
app.use(router)
app.use(store)
app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.component('base-badge',BaseBadge)
app.mount('#app')
