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
  { 
    path: '/', 
    component: Home,
    meta: {
      title: 'Edgar Treischl - Data Scientist & Technical Product Lead',
      description: 'Data scientist and technical product lead transforming complex data into practical solutions. Specializing in data visualization, machine learning, and building scalable data platforms.',
      keywords: 'Edgar Treischl, Data Scientist, Technical Product Lead, Data Visualization, Machine Learning'
    }
  },
  { 
    path: '/about', 
    component: About,
    meta: {
      title: 'About - Edgar Treischl',
      description: 'Learn more about Edgar Treischl, a data scientist with a PhD in social science, expertise in machine learning, data visualization, and building scalable data platforms.',
      keywords: 'Edgar Treischl, About, Data Science, Machine Learning, PhD, ISB Munich'
    }
  },
  { 
    path: '/timeline', 
    component: TimelineView,
    meta: {
      title: 'Timeline - Edgar Treischl',
      description: 'Professional timeline and career journey of Edgar Treischl, from postdoctoral research to technical product lead.',
      keywords: 'Edgar Treischl, Timeline, Career, Experience'
    }
  },
  { 
    path: '/slides', 
    component: Slides,
    meta: {
      title: 'Slides & Presentations - Edgar Treischl',
      description: 'Presentations and slides by Edgar Treischl on data science, machine learning, and technical topics.',
      keywords: 'Edgar Treischl, Slides, Presentations, Data Science'
    }
  },
  { 
    path: '/projects', 
    component: Projects,
    meta: {
      title: 'Projects - Edgar Treischl',
      description: 'Explore data science projects, R packages, and web development work by Edgar Treischl.',
      keywords: 'Edgar Treischl, Projects, R Packages, Data Science, Open Source'
    }
  },
  { 
    path: '/projects/:projectId', 
    component: ProjectDetail, 
    props: true,
    meta: {
      title: 'Project Details - Edgar Treischl',
      description: 'Detailed information about Edgar Treischl\'s data science and development projects.',
      keywords: 'Edgar Treischl, Project Details, Data Science Projects'
    }
  },
  { 
    path: '/contact', 
    component: Contact,
    meta: {
      title: 'Contact - Edgar Treischl',
      description: 'Get in touch with Edgar Treischl for collaborations, consulting, or inquiries.',
      keywords: 'Edgar Treischl, Contact, Email, Collaboration'
    }
  },
  { 
    path: '/license', 
    component: License,
    meta: {
      title: 'License - Edgar Treischl',
      description: 'License and legal information for Edgar Treischl\'s website and content.',
      keywords: 'Edgar Treischl, License, Legal'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top on route change for better UX
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update meta tags on route change
router.afterEach((to) => {
  // Update document title
  const title = to.meta.title as string || 'Edgar Treischl - Data Scientist & Technical Product Lead'
  document.title = title

  // Update meta description
  const description = to.meta.description as string
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
  }

  // Update meta keywords
  const keywords = to.meta.keywords as string
  if (keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', title)
  }

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription && description) {
    ogDescription.setAttribute('content', description)
  }

  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', `https://edgar-treischl.de${to.path}`)
  }

  // Update Twitter Card tags
  const twitterTitle = document.querySelector('meta[property="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title)
  }

  const twitterDescription = document.querySelector('meta[property="twitter:description"]')
  if (twitterDescription && description) {
    twitterDescription.setAttribute('content', description)
  }

  const twitterUrl = document.querySelector('meta[property="twitter:url"]')
  if (twitterUrl) {
    twitterUrl.setAttribute('content', `https://edgar-treischl.de${to.path}`)
  }

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `https://edgar-treischl.de${to.path}`)
})

export default router




