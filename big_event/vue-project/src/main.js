import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.js'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const APP = createApp(App)

APP.use(pinia)
APP.use(router)
APP.use(ElementPlus, locale)
APP.mount('#app')
