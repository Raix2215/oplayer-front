import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'

const piniaInstance = createPinia()

createApp(App).use(piniaInstance).use(store).use(router).mount('#app')