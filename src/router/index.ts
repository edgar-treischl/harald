// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Import the manually created components (pages)
import Home from '@/pages/index.vue'
import About from '@/pages/about.vue'
import Projects from '@/pages/Projects.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/projects/:projectId', component: ProjectDetail, props: true }, // Dynamic route for project details

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
