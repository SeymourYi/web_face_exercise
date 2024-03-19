import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import FolwingArea from "@/components/home/FolwingArea.vue";
import MainArea from "@/components/home/MainArea.vue";
import UserNaviLine from "@/components/user_home/UserNaviLine.vue";
import HomePage from '@/components/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'yonghujiemian',
      path: '/usernaviLine',
      component: UserNaviLine
    },
    {
      name: 'zhujiemian',
      path: '/HomePage',
      component: HomePage,
      children: [
        {
          name: 'tuijian',
          path: 'mainarea',
          component: MainArea
        },
        {
          name: 'guanzhu',
          path: 'folwingarea',
          component: FolwingArea
        }
      ]
    },
  ]
})
export default router