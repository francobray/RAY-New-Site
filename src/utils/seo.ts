// SEO utilities and constants
export const SEO_CONFIG = {
  SITE_NAME: 'RAY',
  SITE_URL: 'https://rayrestaurant.com',
  DEFAULT_IMAGE: '/images/logo-rayapp-azulwebp-300x150.webp',
  TWITTER_HANDLE: '@rayrestaurant',
  
  // Title templates
  TITLE_TEMPLATE: (title: string) => `${title} | RAY`,
  
  // Meta description limits
  META_DESCRIPTION_MAX: 160,
  TITLE_MAX: 60,
  
  // Open Graph image dimensions
  OG_IMAGE: {
    WIDTH: 1200,
    HEIGHT: 630
  }
} as const

export const generatePageMeta = (config: {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}) => {
  const { title, description, path, image = SEO_CONFIG.DEFAULT_IMAGE, type = 'website' } = config
  const fullUrl = `${SEO_CONFIG.SITE_URL}${path}`
  const fullTitle = SEO_CONFIG.TITLE_TEMPLATE(title)
  
  return {
    title: fullTitle,
    description,
    canonical: fullUrl,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      type,
      image,
      siteName: SEO_CONFIG.SITE_NAME
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image
    }
  }
}