# Vuetify (Default)


This repository contains the source code of **my personal website**, built with **Vue 3** and **Vuetify**.  


## 🧠 Tech Stack

- **Vue 3** 
- **TypeScript** (strict, checked with `vue-tsc`)
- **Vuetify** (UI components + layout system)
- **Vite**
- **Yarn**


## 🚀 Getting Started

This section covers how to start the development server and build the website.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

> Add NODE_OPTIONS='--no-warnings' to suppress the JSON import warnings that happen as part of the Vuetify import mapping. If you are on Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) or higher, you can change this to NODE_OPTIONS='--disable-warning=5401'. If you don't mind the warning, you can remove this from your package.json dev script.

### Building

The site is automatically built and deployed via GitHub Actions on every push to the main branch. To build manually, use:

```bash
yarn build
```


For a type check, run:

```
yarn type-check
```

### 📁 Project Structure (Important Stuff)

````
public/   # Images, static assets
src/
├─ components/        # Reusable Vue components
├─ composables/       # Vue composables (e.g., useSeo)
├─ config/            # Configuration files (e.g., SEO constants)
├─ data/
│  └─ projects.ts     # Project data
├─ pages/
│  ├─ Projects.vue    # Projects listing
│  └─ ...
├─ plugins/           # Vuetify / app plugins
├─ router/            # Router with SEO meta tags
└─ main.ts            # App entry point
```

## 🔍 SEO Optimization

This website includes comprehensive SEO optimization to improve search engine visibility:

### Features Implemented

1. **Meta Tags**: Complete set of meta tags including title, description, keywords, author, and robots directives
2. **Open Graph Tags**: Social media sharing optimization for Facebook, LinkedIn, and other platforms
3. **Twitter Cards**: Optimized Twitter sharing with large image cards
4. **Structured Data**: Schema.org JSON-LD markup for Person type
5. **Sitemap**: XML sitemap at `/sitemap.xml` listing all pages
6. **Robots.txt**: Search engine crawling directives at `/robots.txt`
7. **Dynamic Meta Tags**: Automatic meta tag updates on route changes
8. **Canonical URLs**: Prevents duplicate content issues

### Configuration

SEO constants are centralized in `src/config/seo.ts`:
- Site URL
- Default title, description, and keywords
- Author information

### Per-Route Meta Tags

Each route in `src/router/index.ts` includes custom meta information that automatically updates when navigating between pages.

### Maintaining SEO

**When you update website content**, run the sitemap update script to refresh the last-modified dates:

```bash
npm run update-sitemap
```

📖 **For detailed maintenance instructions**, see [MAINTENANCE.md](./MAINTENANCE.md), which covers:
- How to update the sitemap when content changes
- When and how to update SEO configuration
- How to add new pages to the sitemap
- How to customize SEO for specific pages

### Advanced Usage

For custom SEO on specific pages, use the `useSeo` composable:

```typescript
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Custom Page Title',
  description: 'Custom page description',
  keywords: 'custom, keywords'
})
```

