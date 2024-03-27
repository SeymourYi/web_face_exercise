import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import layout from '@/views/layout.vue'
import Articlecategoryvue from '@/views/article/ArticleCategory.vue'
import ArticleManage from '@/views/article/ArticleManage.vue'
import student from '@/views/student/student.vue'

const routes = [
  { path: '/login', component: Login },
  {
    path: '/', component: layout, children: [
      { path: '/article/category', component: Articlecategoryvue },
      { path: '/article/Manage', component: ArticleManage },
      { path: '/article/student', component: student }
    ]
  }
  // redirect: '/article/category',
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router