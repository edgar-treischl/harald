# SEO Maintenance Guide

This guide explains what you need to do to maintain SEO optimization when your website gets updated.

## 📋 Quick Checklist

When you update the website, follow these steps:

### 1. Update the Sitemap (Required for Content Updates)

The sitemap tells search engines when your pages were last modified. Update it after any content changes:

```bash
npm run update-sitemap
```

Or manually:

```bash
node scripts/update-sitemap.js
```

This will automatically update all `<lastmod>` dates in `public/sitemap.xml` to the current date.

### 2. Update SEO Configuration (When Needed)

If you change key site information, update `src/config/seo.ts`:

- **SITE_URL**: If you change domains or subdomain
- **DEFAULT_TITLE**: If you want to change the main site title
- **DEFAULT_DESCRIPTION**: If you want to update the main description
- **DEFAULT_KEYWORDS**: If you want to update the main keywords
- **DEFAULT_IMAGE**: If you change the main social media preview image
- **AUTHOR**: If the author changes

### 3. Update Route Meta Tags (For New/Modified Pages)

When adding or significantly modifying pages, update `src/router/index.ts`:

```typescript
{
  path: '/your-page',
  component: YourPage,
  meta: {
    title: 'Your Page Title - Edgar Treischl',
    description: 'Description of your page content',
    keywords: 'relevant, keywords, for, this page'
  }
}
```

### 4. Add New Pages to Sitemap

If you add a new route, manually add it to `public/sitemap.xml`:

```xml
<url>
  <loc>https://edgar-treischl.de/your-new-page</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

Then run the update script to set the correct date:

```bash
npm run update-sitemap
```

## 📅 Update Frequency Recommendations

- **Run update-sitemap**: After every content update before deploying
- **Review SEO config**: Quarterly or when branding changes
- **Check route meta tags**: When adding/modifying pages
- **Review sitemap structure**: When adding/removing routes

## 🔍 What Each File Does

### `public/sitemap.xml`
Lists all pages for search engines with last modification dates. Search engines use this to discover and prioritize content for crawling.

### `public/robots.txt`
Tells search engines which pages to crawl. Currently allows all pages and references the sitemap.

### `src/config/seo.ts`
Central configuration for SEO constants. Imported by router and composables for consistency.

### `src/composables/useSeo.ts`
Vue composable for programmatically updating SEO meta tags on specific pages. Use this if you need custom SEO for a particular component.

### `src/router/index.ts`
Defines per-route SEO meta tags that automatically update when users navigate. The `afterEach` hook updates all meta tags on route changes.

### `index.html`
Contains the default SEO meta tags that load before Vue initializes. Includes:
- Primary meta tags (title, description, keywords)
- Open Graph tags (for Facebook, LinkedIn, etc.)
- Twitter Card tags (for Twitter)
- Structured data (JSON-LD for search engines)

## 🚀 Deployment Workflow

1. Make content changes to your website
2. Run `npm run update-sitemap` to update the sitemap dates
3. Commit your changes
4. Push to main branch
5. GitHub Actions will automatically build and deploy

## 💡 Tips

- **Be consistent**: Always update the sitemap when you update content
- **Use specific dates**: The sitemap script uses the current date, which tells search engines exactly when content changed
- **Monitor in Google Search Console**: After deploying, check that Google can access your sitemap at `https://edgar-treischl.de/sitemap.xml`
- **Update strategically**: You don't need to update dates for typo fixes, but do update for meaningful content changes

## 🔧 Advanced: Custom SEO Per Page

If you need to override SEO for a specific component, use the `useSeo` composable:

```vue
<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Custom Title',
  description: 'Custom description for this specific page',
  keywords: 'custom, keywords',
  ogImage: 'https://edgar-treischl.de/images/custom-image.png'
})
</script>
```

## ❓ Questions?

If you're unsure whether you need to update something:

- **Content change** (blog post, project info, etc.) → Update sitemap
- **New page added** → Add to sitemap + update router meta
- **Styling/UI only** → No SEO updates needed
- **Domain change** → Update `src/config/seo.ts` and all absolute URLs

---

**Remember**: Good SEO is about keeping information fresh and accurate. When in doubt, run `npm run update-sitemap`! 🎯
