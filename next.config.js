const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
  },
  // Modern browser support - reduce legacy JS polyfills
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Target modern browsers to reduce polyfills
  env: {
    BROWSERSLIST_ENV: 'modern',
  },
  // Font optimization
  optimizeFonts: true,
  // Bundle analyzer for debugging
  webpack: (config, { dev, isServer }) => {
    // Reduce bundle size - only in production
    if (!dev && !isServer) {
      // Tree shaking optimization
      config.optimization.usedExports = true
      config.optimization.sideEffects = false
      
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      }
    }
    
    return config
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(self "https://*.vapi.ai" "https://*.daily.co"), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://grader.rayapp.io https://static.cloudflareinsights.com https://maps.googleapis.com https://unpkg.com https://*.vapi.ai https://vapi.ai https://cdn.vapi.ai; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://*.google.com https://*.doubleclick.net https://grader.rayapp.io https://static.cloudflareinsights.com https://cloudflareinsights.com https://maps.googleapis.com https://*.vapi.ai https://vapi.ai https://cdn.vapi.ai https://api.vapi.ai wss://*.vapi.ai https://*.daily.co https://c.daily.co wss://*.daily.co https://franbreciano.app.n8n.cloud; font-src 'self' data: https://fonts.gstatic.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';",
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.min.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect root to Spanish locale (permanent)
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
      // Note: Host-level redirects (www <-> apex) handled at CDN/edge to avoid loops
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
