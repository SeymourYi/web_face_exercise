// 从vue获得创建器
import { createApp } from "vue";
// 引入app
import App from "./app.vue";
import { createPinia } from "pinia";
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// 使用app
app.mount('#app')