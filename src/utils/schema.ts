// Schema.org structured data generators
import { SEO_CONFIG } from './seo'

// Enhanced Organization schema with more AI-friendly data
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RAY",
  "alternateName": "RAY Restaurant Marketing Platform",
  "description": "Restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews",
  "url": SEO_CONFIG.SITE_URL,
  "@id": `${SEO_CONFIG.SITE_URL}/#organization`,
  "logo": `${SEO_CONFIG.SITE_URL}/images/logo-rayapp-azulwebp-300x150.webp`,
  "foundingDate": "2020",
  "numberOfEmployees": "11-50",
  "industry": "Restaurant Marketing Technology",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-RAY-HELP",
    "contactType": "customer service",
    "email": "hello@rayapp.io",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/rayapp",
    "https://twitter.com/rayapp"
  ],
  "knowsAbout": [
    "Restaurant Marketing",
    "Local SEO",
    "Google Business Profile Optimization",
    "Online Reputation Management",
    "Restaurant Technology"
  ]
})

// Enhanced Website schema with SearchAction
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "RAY",
  "@id": `${SEO_CONFIG.SITE_URL}/#website`,
  "url": SEO_CONFIG.SITE_URL,
  "description": "Restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews",
  "inLanguage": "en-US",
  "publisher": {
    "@id": `${SEO_CONFIG.SITE_URL}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SEO_CONFIG.SITE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
})

// Enhanced Product schema with detailed offers
export const generateProductSchema = (product: {
  name: string
  description: string
  url: string
  price?: string
  features?: string[]
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": `RAY ${product.name}`,
  "description": product.description,
  "url": product.url,
  "@id": `${product.url}#product`,
  "category": "Restaurant Marketing Software",
  "brand": {
    "@type": "Brand",
    "name": "RAY",
    "@id": `${SEO_CONFIG.SITE_URL}/#organization`
  },
  "manufacturer": {
    "@id": `${SEO_CONFIG.SITE_URL}/#organization`
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "price": product.price || "270",
    "priceValidUntil": "2025-12-31",
    "seller": {
      "@id": `${SEO_CONFIG.SITE_URL}/#organization`
    },
    "warranty": "30%+ increase in Google Business Profile navigations within 6 months or money back guarantee"
  },
  "additionalProperty": product.features?.map(feature => ({
    "@type": "PropertyValue",
    "name": "Feature",
    "value": feature
  })) || []
})

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>, url?: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url || SEO_CONFIG.SITE_URL}#faq`,
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/\n\n/g, ' ')
    }
  }))
})

// Enhanced Case Study schema with more detailed metrics
export const generateCaseStudySchema = (caseStudy: {
  name: string
  description: string
  url: string
  organization: string
  location: string
  results: Array<{ name: string; value: string; unitText: string }>
  datePublished?: string
  author?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  "name": `${caseStudy.organization} Success Story`,
  "description": caseStudy.description,
  "url": caseStudy.url,
  "@id": `${caseStudy.url}#casestudy`,
  "datePublished": caseStudy.datePublished || "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "inLanguage": "en-US",
  "author": {
    "@type": "Organization",
    "@id": `${SEO_CONFIG.SITE_URL}/#organization`
  },
  "publisher": {
    "@id": `${SEO_CONFIG.SITE_URL}/#organization`
  },
  "about": {
    "@type": "Organization",
    "name": caseStudy.organization,
    "location": {
      "@type": "Place",
      "name": caseStudy.location
    }
  },
  "result": caseStudy.results.map(result => ({
    "@type": "QuantitativeValue",
    "name": result.name,
    "value": result.value,
    "unitText": result.unitText
  })),
  "keywords": [
    "restaurant marketing",
    "local SEO",
    "Google Business Profile",
    "case study",
    caseStudy.organization
  ]
})

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
})

// Local Business schema for company info
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SEO_CONFIG.SITE_URL}/#localbusiness`,
  "name": "RAY",
  "description": "Restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews",
  "url": SEO_CONFIG.SITE_URL,
  "telephone": "+1-555-RAY-HELP",
  "email": "hello@rayapp.io",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$",
  "paymentAccepted": "Credit Card, Debit Card",
  "currenciesAccepted": "USD"
})

// Service schema for our offerings
export const generateServiceSchema = (service: {
  name: string
  description: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "@id": `${service.url}#service`,
  "provider": {
    "@id": `${SEO_CONFIG.SITE_URL}/#organization`
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": "Restaurant Marketing",
  "category": "Marketing Services"
})