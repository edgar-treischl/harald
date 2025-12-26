# Pre-Deployment SEO Checklist

Use this checklist before deploying website updates to ensure SEO is properly maintained.

## ✅ Before Every Deployment

- [ ] **Content updated?** → Run `npm run update-sitemap` to update lastmod dates
- [ ] **New pages added?** → Add them to `public/sitemap.xml` (see MAINTENANCE.md)
- [ ] **Routes changed?** → Update meta tags in `src/router/index.ts`
- [ ] **Run build** → `yarn build` to ensure no errors
- [ ] **Test locally** → `yarn preview` and verify meta tags in browser DevTools

## ✅ Quarterly Review

- [ ] Review and update `src/config/seo.ts` if needed
- [ ] Check `public/robots.txt` is still appropriate
- [ ] Verify all sitemap URLs are still valid
- [ ] Test social media preview cards (Facebook, Twitter, LinkedIn)

## ✅ After Deployment

- [ ] Verify sitemap is accessible at: https://edgar-treischl.de/sitemap.xml
- [ ] Check robots.txt at: https://edgar-treischl.de/robots.txt
- [ ] Submit updated sitemap to Google Search Console (if not auto-detected)
- [ ] Test a few pages to ensure meta tags are correct (view page source)

## 🔍 How to Test Meta Tags

1. Open your deployed site in a browser
2. Right-click → "View Page Source"
3. Look for these sections:
   - `<title>` tag
   - `<meta name="description">` 
   - `<meta property="og:*">` (Open Graph tags)
   - `<meta name="twitter:*">` (Twitter Card tags)
   - `<link rel="canonical">` (Canonical URL)

## 🛠️ Useful Tools

- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html

---

**Need help?** See [MAINTENANCE.md](./MAINTENANCE.md) for detailed instructions.
