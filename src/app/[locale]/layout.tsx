import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, generateHreflangMetadata, generateOpenGraphLocale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import SimpleWebChat from '@/components/shared/SimpleWebChat'
import { PostHogProvider } from '@/components/providers/PostHogProvider'

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
        {/* Inline Critical CSS - fonts + above-the-fold styles to eliminate render-blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:swap;src:url('/fonts/Inter-Variable.woff2') format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
              @font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url('/fonts/Inter-Regular.woff2') format('woff2')}
              *,::before,::after{box-sizing:border-box;margin:0;padding:0;border:0 solid}
              html{-webkit-text-size-adjust:100%;tab-size:4;scroll-behavior:smooth}
              body{font-family:'Inter',system-ui,-apple-system,sans-serif;line-height:1.6;color:#1C1C1C;background:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0}
              .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
              img,video,iframe,svg{max-width:100%;height:auto;display:block;vertical-align:middle}
              img[width][height]{height:auto}
              button,a{cursor:pointer}
              button{background:none;font-family:inherit;border:0}
              .container,.max-w-7xl{max-width:80rem;margin:0 auto;padding:0 1rem}
              .flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}
              .hidden{display:none}.block{display:block}.inline{display:inline}.inline-block{display:inline-block}
              .relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.sticky{position:sticky}
              .items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}
              .gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}
              .space-y-4>:not([hidden])~:not([hidden]){margin-top:1rem}.space-y-6>:not([hidden])~:not([hidden]){margin-top:1.5rem}
              .w-full{width:100%}.h-full{height:100%}.min-h-screen{min-height:100vh}
              .p-2{padding:0.5rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}
              .px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}
              .py-4{padding-top:1rem;padding-bottom:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}
              .m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-top:1rem;margin-bottom:1rem}
              .mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.mt-8{margin-top:2rem}.mb-8{margin-bottom:2rem}
              .text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}
              .font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}
              .text-sm{font-size:0.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}
              .text-white{color:#fff}.text-black{color:#000}.text-gray-600{color:#4b5563}.text-gray-900{color:#111827}
              .bg-white{background-color:#fff}.bg-gray-50{background-color:#f9fafb}.bg-gray-100{background-color:#f3f4f6}
              .rounded{border-radius:0.25rem}.rounded-md{border-radius:0.375rem}.rounded-lg{border-radius:0.5rem}.rounded-xl{border-radius:0.75rem}.rounded-full{border-radius:9999px}
              .shadow{box-shadow:0 1px 3px 0 rgb(0 0 0/0.1)}.shadow-md{box-shadow:0 4px 6px -1px rgb(0 0 0/0.1)}.shadow-lg{box-shadow:0 10px 15px -3px rgb(0 0 0/0.1)}
              .opacity-0{opacity:0}.opacity-100{opacity:1}
              .z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}
              .overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}
              .transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4,0,0.2,1)}
              .duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4,0,0.2,1)}
              @media(min-width:640px){.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}
              @media(min-width:768px){.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:text-lg{font-size:1.125rem}.md\\:text-2xl{font-size:1.5rem}}
              @media(min-width:1024px){.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:text-xl{font-size:1.25rem}.lg\\:text-3xl{font-size:1.875rem}}
              @media(prefers-reduced-motion:reduce){*,::before,::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}}
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
              
              // Defer main CSS bundle loading for faster LCP
              if('requestIdleCallback' in window){
                requestIdleCallback(function(){
                  var links=document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
                  links.forEach(function(link){
                    if(!link.hasAttribute('data-processed')){
                      link.setAttribute('fetchpriority','low');
                      link.setAttribute('data-processed','true');
                    }
                  });
                },{ timeout:1500});
              }
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
        <PostHogProvider>
          <Header locale={locale} />
          <main>
            {children}
          </main>
          <Footer locale={locale} />
          {isChatEnabled && <SimpleWebChat locale={locale} />}
        </PostHogProvider>
      </body>
    </html>
  )
}




