import posthog from 'posthog-js'

export function initPostHog() {
  if (typeof window !== 'undefined') {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'

    console.log('🔧 PostHog Init:', {
      hasKey: !!posthogKey,
      host: posthogHost,
      keyPreview: posthogKey?.substring(0, 10) + '...'
    })

    if (!posthogKey) {
      console.warn('⚠️ PostHog key not found. A/B testing will not work.')
      return
    }
    
    // Solo inicializar una vez
    if (posthog && typeof posthog.isFeatureEnabled === 'function') {
      console.log('✅ PostHog already initialized')
      return posthog
    }

    console.log('🚀 Initializing PostHog...')
    posthog.init(posthogKey, {
      api_host: posthogHost,
      
      // Optimización de performance
      capture_pageview: false, // Lo haremos manualmente desde Next.js
      capture_pageleave: true,
      
      // Autocapture de clicks y forms
      autocapture: {
        dom_event_allowlist: ['click'], // Solo clicks
        url_allowlist: [window.location.origin], // Solo tu dominio
        element_allowlist: ['a', 'button', 'input']
      },
      
      // Session recording (opcional, puedes desactivar)
      disable_session_recording: false,
      session_recording: {
        maskAllInputs: true, // Ocultar inputs sensibles
        maskTextSelector: '[data-private]' // Ocultar elementos con data-private
      },

      // Configuración de loaded
      loaded: (posthog) => {
        // Desactivar en desarrollo (comentado para testing)
        // if (process.env.NODE_ENV === 'development') {
        //   posthog.opt_out_capturing()
        //   posthog.debug(false)
        // }
        
        // Activar debug en desarrollo para ver logs
        if (process.env.NODE_ENV === 'development') {
          posthog.debug(true)
        }
        
        // Forzar recarga de feature flags
        console.log('🔄 Reloading feature flags...')
        posthog.reloadFeatureFlags()
        
        // Log cuando se carguen los flags
        posthog.onFeatureFlags(function() {
          console.log('🎉 Feature flags loaded!')
        })
      },

      // Bootstrap de feature flags (temporal para testing)
      bootstrap: {
        featureFlags: {
          'hero-h1-test-es': 'control',
          'hero-h1-test-en': 'control'
        },
      },
      
      // Persistence
      persistence: 'localStorage',
    })
  }

  return posthog
}

export default posthog

