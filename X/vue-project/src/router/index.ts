import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import FolwingArea from "@/components/home/FolwingArea.vue";
import MainArea from "@/components/home/MainArea.vue";
import UserNaviLine from "@/components/user_home/UserNaviLine.vue";
import HomePage from '@/components/home/HomePage.vue'
import HuiFu from '@/components/user_home/HuiFu.vue'
import TieZi from '@/components/user_home/TieZi.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'yonghujiemian',
      path: '/usernaviLine',
      component: UserNaviLine,
      children: [
        {
          name: 'huifu',
          path: 'huifu',
          component: HuiFu
        },
        {
          name: 'tiezi',
          path: 'tiezi',
          component: TieZi
        },

      ]
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