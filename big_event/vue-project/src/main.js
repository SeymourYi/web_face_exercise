import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const APP = createApp(App)
APP.use(ElementPlus)

APP.mount('#app')
