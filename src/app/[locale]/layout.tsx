import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, generateHreflangMetadata, generateOpenGraphLocale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import SimpleWebChat from '@/components/shared/SimpleWebChat'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const locale = params.locale as Locale
  
  if (!isValidLocale(locale)) {
    return {}
  }

  const t = getTranslations(locale)
  const hreflangData = generateHreflangMetadata('', locale) // Root path
  const ogLocale = generateOpenGraphLocale(locale)
  
  return {
    title: {
      default: `RAY - ${t.COMPANY.TAGLINE}`,
      template: `%s | RAY`
    },
    description: t.COMPANY.DESCRIPTION,
    alternates: hreflangData,
    openGraph: {
      title: `RAY - ${t.COMPANY.TAGLINE}`,
      description: t.COMPANY.DESCRIPTION,
      ...ogLocale,
    },
    other: {
      'google-site-verification': 'PageSpeed-friendly',
      'lighthouse': 'enabled',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export async function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' }
  ]
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale as Locale
  
  // Validate locale
  if (!isValidLocale(locale)) {
    notFound()
  }

  // Check if chat webhook is configured
  const isChatEnabled = !!process.env.N8N_CHAT_WEBHOOK_URL
  
  if (!isChatEnabled) {
    console.log('💬 Chat widget disabled: N8N_CHAT_WEBHOOK_URL environment variable not configured')
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        {/* DNS Prefetch & Preconnect for external domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://grader.rayapp.io" />
        <link rel="preconnect" href="https://grader.rayapp.io" crossOrigin="anonymous" />
        {/* Preload self-hosted Inter font - eliminates Google Fonts render-blocking */}
        <link
          rel="preload"
          href="/fonts/Inter-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload critical CSS files - reduces blocking time */}
        <link rel="preload" href="/_next/static/css/app/[locale]/layout.css" as="style" />
        {/* Inline Critical CSS - fonts + above-the-fold styles to eliminate render-blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 100 900;
                font-display: swap;
                src: url('/fonts/Inter-Variable.woff2') format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/fonts/Inter-Regular.woff2') format('woff2');
              }
              *{box-sizing:border-box;margin:0;padding:0}
              body{font-family:'Inter',system-ui,-apple-system,sans-serif;line-height:1.6;color:#1C1C1C;background:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
              .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
              img,video,iframe{max-width:100%;height:auto;display:block}
              img[width][height]{height:auto;aspect-ratio:attr(width)/attr(height)}
              #ray-widget{min-height:165px;height:165px;contain:layout style paint}
              .aspect-ratio-4-3{aspect-ratio:4/3}
              .aspect-ratio-16-9{aspect-ratio:16/9}
              .aspect-ratio-1-1{aspect-ratio:1/1}
              h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.2;margin:0}
              button,a{cursor:pointer}
              .max-w-7xl{max-width:80rem;margin:0 auto}
              .container{max-width:1200px;margin:0 auto;padding:0 1rem}
            `,
          }}
        />
        {/* Load non-critical CSS asynchronously - doesn't block render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var link=document.createElement('link');
                link.rel='stylesheet';
                link.href='/styles/non-critical.css';
                link.media='print';
                link.onload=function(){this.media='all';this.onload=null;};
                document.head.appendChild(link);
              })();
            `,
          }}
        />
        <noscript><link rel="stylesheet" href="/styles/non-critical.css" /></noscript>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google Analytics - Optimized deferred loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize dataLayer early (non-blocking)
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              // Make gtag available globally immediately
              window.gtag = gtag;
              
              // Defer Google Tag Manager script loading until page is interactive
              // This improves initial page load performance (~55 KiB savings)
              function loadGoogleAnalytics() {
                // Prevent multiple loads
                if (window.__gtag_loaded) return;
                window.__gtag_loaded = true;
                
                // Load GTM script dynamically
                var script = document.createElement('script');
                script.async = true;
                script.defer = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CFH2T8RJ0P';
                document.head.appendChild(script);
                
                // Configure after script loads
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', 'G-CFH2T8RJ0P');
                  // Process any queued events
                  if (window.dataLayer && window.dataLayer.length > 0) {
                    window.dataLayer.forEach(function(item) {
                      if (item && item[0] === 'event') {
                        gtag.apply(null, item);
                      }
                    });
                  }
                };
              }
              
              
              // Load after page is interactive or user interaction
              // Optimized to minimize main-thread work
              if (document.readyState === 'complete') {
                // Page already loaded, defer with requestIdleCallback
                if (window.requestIdleCallback) {
                  requestIdleCallback(loadGoogleAnalytics, { timeout: 3000 });
                } else {
                  setTimeout(loadGoogleAnalytics, 2000);
                }
              } else {
                // Use requestIdleCallback for better performance, fallback to setTimeout
                if (window.requestIdleCallback) {
                  requestIdleCallback(loadGoogleAnalytics, { timeout: 3000 });
                } else {
                  // Fallback: load after DOMContentLoaded + delay
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                      setTimeout(loadGoogleAnalytics, 2000);
                    });
                  } else {
                    setTimeout(loadGoogleAnalytics, 2000);
                  }
                }
                
                // Also load on first user interaction (scroll, click, touch)
                // This ensures analytics loads when user engages with the page
                var interactionEvents = ['scroll', 'click', 'touchstart', 'keydown'];
                var loadedOnInteraction = false;
                var loadOnInteraction = function() {
                  if (!loadedOnInteraction) {
                    loadedOnInteraction = true;
                    loadGoogleAnalytics();
                    interactionEvents.forEach(function(event) {
                      document.removeEventListener(event, loadOnInteraction, { passive: true });
                    });
                  }
                };
                interactionEvents.forEach(function(event) {
                  document.addEventListener(event, loadOnInteraction, { passive: true, once: true });
                });
              }
            `,
          }}
        />
        {!isChatEnabled && (
          <script
            dangerouslySetInnerHTML={{
              __html: `console.log('💬 Chat widget disabled: N8N_CHAT_WEBHOOK_URL environment variable not configured');`,
            }}
          />
        )}
        <Header locale={locale} />
        <main>
          {children}
        </main>
        <Footer locale={locale} />
        {isChatEnabled && <SimpleWebChat locale={locale} />}
      </body>
    </html>
  )
}




