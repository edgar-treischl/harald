// src/composables/useSeo.ts
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { buildSiteUrl, type SeoMeta, upsertLinkTag, upsertMetaTag } from '@/utils/seo'

export function useSeo(meta: SeoMeta) {
  const route = useRoute()

  const updateMeta = () => {
    if (meta.title) {
      document.title = meta.title
      upsertMetaTag('property', 'og:title', meta.ogTitle || meta.title)
      upsertMetaTag('name', 'twitter:title', meta.twitterTitle || meta.title)
      upsertMetaTag('name', 'title', meta.title)
    }

    if (meta.description) {
      upsertMetaTag('name', 'description', meta.description)
      upsertMetaTag('property', 'og:description', meta.ogDescription || meta.description)
      upsertMetaTag('name', 'twitter:description', meta.twitterDescription || meta.description)
    }

    if (meta.keywords) {
      upsertMetaTag('name', 'keywords', meta.keywords)
    }

    if (meta.ogImage) {
      upsertMetaTag('property', 'og:image', meta.ogImage)
    }

    if (meta.twitterImage) {
      upsertMetaTag('name', 'twitter:image', meta.twitterImage)
    }

    if (meta.canonical) {
      upsertLinkTag('canonical', meta.canonical)
    }

    const currentUrl = buildSiteUrl(route.path)
    upsertMetaTag('property', 'og:url', currentUrl)
    upsertMetaTag('name', 'twitter:url', currentUrl)
  }

  updateMeta()

  watch(() => route.path, updateMeta)
}
