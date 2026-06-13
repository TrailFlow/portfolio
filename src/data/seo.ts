/** Update this when you connect a custom domain (e.g. https://trailflow.in) */
export const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://trailflow.github.io/portfolio'

export const seo = {
  title: 'TRAIL FLOW — Professional Website Services in India | From ₹3099',
  description:
    'TRAIL FLOW builds affordable business websites from ₹3099. Mobile-friendly design, free domain, 1-year hosting, SSL & maintenance included. Call or WhatsApp to order.',
  keywords: [
    'TRAIL FLOW',
    'website design India',
    'affordable website',
    'business website ₹3099',
    'web development services',
    'website builder India',
    'small business website',
    'portfolio website',
    'domain and hosting',
    'website maintenance',
  ].join(', '),
  author: 'TRAIL FLOW',
  locale: 'en_IN',
  twitterHandle: '@trailflow',
  ogImage: `${siteUrl}/og-image.svg`,
}
