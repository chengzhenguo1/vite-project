import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from '@/layout/index.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: LayOut,
      children: [{
        path: '/',
        component: () => import('@views/test.vue')
      }]
    }
  ]
})

export default router