// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Import the manually created components (pages)
import Home from '@/pages/index.vue'
import About from '@/pages/about.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
