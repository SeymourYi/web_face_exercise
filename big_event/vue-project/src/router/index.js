import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login.vue'
import layout from '@/views/layout.vue'
import Articlecategoryvue from '@/views/article/ArticleCategory.vue'
import student from '@/views/student/student.vue'
import changepassword from '@/views/student/changepassword.vue'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/', component: layout, children: [
      { path: '/article/category', component: Articlecategoryvue },
      { path: '/article/student', component: student },
      { path: '/article/changepassword', component: changepassword }
    ]
  }
  // redirect: '/article/category',
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router