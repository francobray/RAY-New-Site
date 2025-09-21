import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  publicDir: 'public',
  define: {
    'process.env.SITE_URL': JSON.stringify(process.env.SITE_URL || 'https://rayapp.io'),
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react'],
          helmet: ['react-helmet-async']
        },
      },
    },
    sourcemap: false,
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 5173,
    host: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/[^.]*$/, to: '/index.html' }
      ]
    }
  },
  preview: {
    port: 4173,
    host: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/[^.]*$/, to: '/index.html' }
      ]
    }
  }
})