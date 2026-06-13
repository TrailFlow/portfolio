import { faqs, pricing, site } from '../data/content'
import { seo, siteUrl } from '../data/seo'

export function SeoSchema() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: seo.description,
    url: siteUrl,
    email: site.email,
    telephone: site.phones.map((p) => p.tel),
    priceRange: `₹${pricing.offerPrice}–₹${pricing.standardPrice}`,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: [
      'Website Design',
      'Web Development',
      'Business Website',
      'Portfolio Website',
      'Domain & Hosting Setup',
    ],
    offers: {
      '@type': 'Offer',
      name: 'Complete Website Package',
      price: pricing.offerPrice,
      priceCurrency: 'INR',
      description: 'Up to 5 pages, domain, hosting, SSL, and 1-year maintenance',
      availability: 'https://schema.org/InStock',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: siteUrl,
    description: seo.description,
    inLanguage: 'en-IN',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
