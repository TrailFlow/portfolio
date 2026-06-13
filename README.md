# TRAIL FLOW — Business Portfolio

Professional website services portfolio for TRAIL FLOW.

## Run locally

```bash
npm install
npm run dev
```

## SEO

The site includes:

- Meta title, description, keywords, and canonical URL
- Open Graph & Twitter cards for social sharing
- `robots.txt` and `sitemap.xml` in `public/`
- JSON-LD structured data (business, website, FAQ)

**Update your live URL** in these files when you get a custom domain:

- `index.html` — canonical, og:url, og:image
- `public/sitemap.xml`
- `public/robots.txt`
- Or set `VITE_SITE_URL=https://yourdomain.com` in a `.env` file

## Deploy (GitHub Pages)

```bash
npm run build
```

Enable Pages in repo settings: branch `main`, folder `/ (root)` or `dist` if using GitHub Actions.

Live site: [trailflow.github.io/portfolio](https://trailflow.github.io/portfolio)

## Customize

Edit `src/data/content.ts` for business info, services, and pricing.
