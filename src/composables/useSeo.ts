// src/composables/useSeo.ts
import { watch } from 'vue'
import { useRoute } from 'vue-router'

interface SeoMeta {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonical?: string
}

// SEO Constants
const SITE_URL = 'https://edgar-treischl.de'

export function useSeo(meta: SeoMeta) {
  const route = useRoute()

  const updateMeta = () => {
    // Update title
    if (meta.title) {
      document.title = meta.title
      updateMetaTag('property', 'og:title', meta.ogTitle || meta.title)
      updateMetaTag('name', 'twitter:title', meta.twitterTitle || meta.title)
      updateMetaTag('name', 'title', meta.title)
    }

    // Update description
    if (meta.description) {
      updateMetaTag('name', 'description', meta.description)
      updateMetaTag('property', 'og:description', meta.ogDescription || meta.description)
      updateMetaTag('name', 'twitter:description', meta.twitterDescription || meta.description)
    }

    // Update keywords
    if (meta.keywords) {
      updateMetaTag('name', 'keywords', meta.keywords)
    }

    // Update Open Graph image
    if (meta.ogImage) {
      updateMetaTag('property', 'og:image', meta.ogImage)
    }

    // Update Twitter image (using 'name' attribute)
    if (meta.twitterImage) {
      updateMetaTag('name', 'twitter:image', meta.twitterImage)
    }

    // Update canonical URL
    if (meta.canonical) {
      updateLinkTag('canonical', meta.canonical)
    }

    // Update og:url and twitter:url
    const currentUrl = `${SITE_URL}${route.path}`
    updateMetaTag('property', 'og:url', currentUrl)
    updateMetaTag('name', 'twitter:url', currentUrl)
  }

  const updateMetaTag = (attr: string, key: string, content: string) => {
    let element = document.querySelector(`meta[${attr}="${key}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attr, key)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  }

  const updateLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
    
    if (!element) {
      element = document.createElement('link')
      element.setAttribute('rel', rel)
      document.head.appendChild(element)
    }
    
    element.setAttribute('href', href)
  }

  // Update meta tags immediately
  updateMeta()

  // Watch for route changes
  watch(() => route.path, updateMeta)
}
