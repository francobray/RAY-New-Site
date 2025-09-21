import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE_CONFIG } from '../config/site'

interface SEOHeadProps {
  title: string
  description: string
  canonical: string
  openGraph?: {
    title: string
    description: string
    url: string
    type?: 'website' | 'article'
    image?: string
    siteName?: string
  }
  twitter?: {
    card: 'summary' | 'summary_large_image'
    title: string
    description: string
    image?: string
  }
  schema?: object | object[]
  noIndex?: boolean
  preloadImages?: string[]
  criticalCSS?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  schema,
  noIndex = false,
  preloadImages = [],
  criticalCSS
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://js.hsforms.net" />
      <link rel="preconnect" href="https://forms.hsforms.com" />
      <link rel="dns-prefetch" href="https://grader.rayapp.io" />
      
      {/* Preload critical images */}
      {preloadImages.map((src, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={src}
          fetchPriority={index === 0 ? "high" : "low"}
        />
      ))}
      
      {/* Critical CSS */}
      {criticalCSS && (
        <style type="text/css">{criticalCSS}</style>
      )}
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:description" content={openGraph.description} />
          <meta property="og:url" content={openGraph.url} />
          <meta property="og:type" content={openGraph.type || 'website'} />
          {openGraph.image && <meta property="og:image" content={openGraph.image} />}
          <meta property="og:site_name" content={openGraph.siteName || SITE_CONFIG.SITE_NAME} />
        </>
      )}
      
      {/* Twitter Card */}
      {twitter && (
        <>
          <meta name="twitter:card" content={twitter.card} />
          <meta name="twitter:title" content={twitter.title} />
          <meta name="twitter:description" content={twitter.description} />
          {twitter.image && <meta name="twitter:image" content={twitter.image} />}
          <meta name="twitter:site" content={SITE_CONFIG.TWITTER_HANDLE} />
        </>
      )}
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Performance hints */}
      <meta name="theme-color" content="#0D79E5" />
      <meta name="color-scheme" content="light" />
    </Helmet>
  )
}

export default SEOHead