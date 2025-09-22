import React from 'react'
import { Helmet } from 'react-helmet-async'

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
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  schema,
  noIndex = false
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:description" content={openGraph.description} />
          <meta property="og:url" content={openGraph.url} />
          <meta property="og:type" content={openGraph.type || 'website'} />
          {openGraph.image && <meta property="og:image" content={openGraph.image} />}
          {openGraph.siteName && <meta property="og:site_name" content={openGraph.siteName} />}
        </>
      )}
      
      {/* Twitter Card */}
      {twitter && (
        <>
          <meta name="twitter:card" content={twitter.card} />
          <meta name="twitter:title" content={twitter.title} />
          <meta name="twitter:description" content={twitter.description} />
          {twitter.image && <meta name="twitter:image" content={twitter.image} />}
        </>
      )}
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead