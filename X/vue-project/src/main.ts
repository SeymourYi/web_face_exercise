import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
