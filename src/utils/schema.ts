// Schema.org structured data generators
import { SEO_CONFIG } from './seo'

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RAY",
  "description": "Restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews",
  "url": SEO_CONFIG.SITE_URL,
  "logo": `${SEO_CONFIG.SITE_URL}/images/logo-rayapp-azulwebp-300x150.webp`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-RAY-HELP",
    "contactType": "customer service",
    "email": "hello@rayapp.io"
  },
  "sameAs": [
    "https://twitter.com/rayrestaurant",
    "https://linkedin.com/company/rayrestaurant"
  ]
})

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "RAY",
  "url": SEO_CONFIG.SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SEO_CONFIG.SITE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
})

export const generateProductSchema = (product: {
  name: string
  description: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": `RAY ${product.name}`,
  "description": product.description,
  "url": product.url,
  "brand": {
    "@type": "Brand",
    "name": "RAY"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  }
})

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const generateCaseStudySchema = (caseStudy: {
  name: string
  description: string
  url: string
  organization: string
  location: string
  results: Array<{ name: string; value: string; unitText: string }>
}) => ({
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  "name": `${caseStudy.organization} Success Story`,
  "description": caseStudy.description,
  "url": caseStudy.url,
  "about": {
    "@type": "Organization",
    "name": caseStudy.organization,
    "location": caseStudy.location
  },
  "result": caseStudy.results.map(result => ({
    "@type": "QuantitativeValue",
    "name": result.name,
    "value": result.value,
    "unitText": result.unitText
  }))
})