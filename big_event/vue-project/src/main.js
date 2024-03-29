import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const APP = createApp(App)
APP.use(ElementPlus)
APP.use(pinia)
APP.use(router)
APP.mount('#app')
