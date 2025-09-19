import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App2 from './App2.vue'

createApp(App2).use(createPinia()).use(router).mount('#app')
