// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/pages/index.vue'
import About from '@/pages/about.vue'
import Projects from '@/pages/Projects.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'
import TimelineView from '@/pages/TimelineView.vue'
import Contact from '@/pages/Contact.vue'
import Slides from '@/pages/Slides.vue'
import License from '@/pages/License.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/timeline', component: TimelineView },
  { path: '/slides', component: Slides },
  { path: '/projects', component: Projects },
  { path: '/projects/:projectId', component: ProjectDetail, props: true },
  { path: '/contact', component: Contact },
  { path: '/license', component: License },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router




