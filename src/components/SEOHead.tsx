import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  schema?: any[]
  [key: string]: any
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  canonical, 
  schema
}) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && schema.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEOHead
