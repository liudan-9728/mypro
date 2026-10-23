import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
	history: createWebHistory('/'),
	routes: [
		{ path: '/helloWorld', component: () => import('@/views/HelloWorld.vue') },
		{ path: '/test', component: () => import('@/views/test/index.vue') }
	]
})
export default router
