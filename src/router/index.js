import { createWebHistory, createRouter } from 'vue-router'
import BacKendLayout from '@/components/BacKendLayot.vue'

// 路由的配置
const backendRoutes = [
  {
    path: '/back',
    component: BacKendLayout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard.vue'),
        meta: {
          title: '数据分析',
          icon: 'PieChart'
        }
      },
      {
        path: 'konwledge',
        component: () => import('@/views/konwledge.vue'),
        meta: {
          title: '知识文章',
          icon: 'Document'
        }
      },
      {
        path: 'consolutation',
        component: () => import('@/views/consolutation.vue'),
        meta: {
          title: '咨询记录',
          icon: 'Message'
        }
      },
      {
        path:'emmotional',
        component: () => import('@/views/emmotional.vue'),
        meta: {
          title: '情绪日志',
          icon: 'User'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: 
  [
    ...backendRoutes,
    { path: '/helloWorld', component: () => import('@/views/HelloWorld.vue') },
    { path: '/test', component: () => import('@/views/test/index.vue') }
  ]
})

export default router
