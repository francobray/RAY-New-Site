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
    // Optimize image quality for better performance
    unoptimized: false,
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
    optimizeCss: true, // Inline critical CSS automatically
    cssChunking: 'strict', // Aggressive CSS chunking to minimize initial bundle
  },
  // Optimize CSS loading
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundle
  // Modern browser support - reduce legacy JS polyfills
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
      
      // Better code splitting strategy
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Separate React/Next.js core libraries
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            name: 'framework',
            chunks: 'all',
            priority: 40,
            enforce: true,
          },
          // Separate large libraries
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1]
              return `lib-${packageName?.replace('@', '')}`
            },
            priority: 30,
            minSize: 100000, // Only split if > 100KB
            reuseExistingChunk: true,
          },
          // Regular vendors
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 20,
            reuseExistingChunk: true,
          },
          // Common code used across multiple chunks
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      }
      
      // Minimize polyfills by targeting modern browsers
      config.resolve.alias = {
        ...config.resolve.alias,
        // Use modern versions of libraries when available
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
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://www.googletagmanager.com https://www.google-analytics.com https://grader.rayapp.io https://static.cloudflareinsights.com https://maps.googleapis.com https://unpkg.com https://*.vapi.ai https://vapi.ai https://cdn.vapi.ai; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://*.google.com https://*.doubleclick.net https://grader.rayapp.io https://static.cloudflareinsights.com https://cloudflareinsights.com https://maps.googleapis.com https://*.vapi.ai https://vapi.ai https://cdn.vapi.ai https://api.vapi.ai wss://*.vapi.ai https://*.daily.co https://c.daily.co wss://*.daily.co https://franbreciano.app.n8n.cloud; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self';",
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
        source: '/uploads/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
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
      // Cache vendor chunks (including polyfills)
      {
        source: '/_next/static/chunks/:path*.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache build manifest
      {
        source: '/_next/static/buildManifest.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Removed hardcoded redirect - language detection handled by middleware
  // This allows Accept-Language headers to work properly for better UX
}

module.exports = withBundleAnalyzer(nextConfig)
