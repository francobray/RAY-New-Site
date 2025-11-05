import posthog from 'posthog-js'

// Global flag to track if PostHog has been initialized
let isInitialized = false

export function initPostHog() {
  console.log('🔧 initPostHog called', {
    isClient: typeof window !== 'undefined',
    isInitialized,
    timestamp: new Date().toISOString()
  })

  if (typeof window !== 'undefined') {
    // Check environment variables (Next.js embeds NEXT_PUBLIC_* at build time)
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'
    
    // Debug: Check all NEXT_PUBLIC_* vars
    const allEnvVars = Object.keys(process.env)
      .filter(key => key.startsWith('NEXT_PUBLIC_'))
      .reduce((acc, key) => {
        acc[key] = process.env[key]?.substring(0, 10) + '...' || 'undefined'
        return acc
      }, {} as Record<string, string>)

    console.log('🔧 PostHog Init:', {
      hasKey: !!posthogKey,
      keyValue: posthogKey || 'MISSING',
      keyPreview: posthogKey?.substring(0, 15) + '...' || 'N/A',
      keyLength: posthogKey?.length || 0,
      host: posthogHost,
      isInitialized,
      allNextPublicVars: allEnvVars,
      // Check if key looks like a placeholder
      isPlaceholder: posthogKey?.includes('<NEXT_PUBLIC_POSTHOG_KEY>') || posthogKey === '<NEXT_PUBLIC_POSTHOG_KEY>'
    })

    if (!posthogKey || posthogKey === '<NEXT_PUBLIC_POSTHOG_KEY>' || posthogKey.includes('<NEXT_PUBLIC_POSTHOG_KEY>')) {
      console.error('❌ PostHog key not found or is a placeholder!', {
        keyValue: posthogKey || 'undefined',
        isPlaceholder: posthogKey?.includes('<NEXT_PUBLIC_POSTHOG_KEY>'),
        message: 'The NEXT_PUBLIC_POSTHOG_KEY environment variable is not set or was not replaced during build. A/B testing will not work.'
      })
      console.warn('⚠️ Check NEXT_PUBLIC_POSTHOG_KEY environment variable in GitHub Actions secrets')
      console.warn('⚠️ Verify that the sed replacement in .github/workflows/main.yaml is working correctly')
      return posthog
    }
    
    // Solo inicializar una vez
    if (isInitialized || (posthog.__loaded && posthog.get_distinct_id)) {
      console.log('✅ PostHog already initialized', {
        distinctId: posthog.get_distinct_id?.(),
        isLoaded: posthog.__loaded
      })
      
      // Check flags immediately if already initialized
      const esFlag = posthog.getFeatureFlag('hero-h1-test-es')
      const enFlag = posthog.getFeatureFlag('hero-h1-test-en')
      console.log('🔍 Flag check (PostHog already initialized):', {
        'hero-h1-test-es': esFlag || 'undefined',
        'hero-h1-test-en': enFlag || 'undefined'
      })
      
      return posthog
    }

    try {
      console.log('🚀 Initializing PostHog...', {
        key: posthogKey.substring(0, 10) + '...',
        host: posthogHost,
        origin: window.location.origin
      })
      
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
        loaded: (ph) => {
          isInitialized = true
          
          // Activar debug siempre para ver logs en consola (producción y desarrollo)
          ph.debug(true)
          
          console.log('✅ PostHog loaded successfully!')
          console.log('📊 PostHog config:', {
            distinct_id: ph.get_distinct_id(),
            session_id: ph.get_session_id(),
            api_host: ph.config.api_host,
            isDebug: ph.config.debug
          })
          
          // Forzar recarga de feature flags
          console.log('🔄 Reloading feature flags...')
          ph.reloadFeatureFlags()
          
          // Log cuando se carguen los flags
          ph.onFeatureFlags(function() {
            console.log('🎉 Feature flags loaded callback triggered!')
            const flags = {
              'hero-h1-test-es': ph.getFeatureFlag('hero-h1-test-es'),
              'hero-h1-test-en': ph.getFeatureFlag('hero-h1-test-en')
            }
            console.log('📋 Active flags:', flags)
            console.log('📊 Flag values:', {
              'hero-h1-test-es': flags['hero-h1-test-es'] || 'undefined - check PostHog configuration',
              'hero-h1-test-en': flags['hero-h1-test-en'] || 'undefined - check PostHog configuration'
            })
            
            // Warn if flags are undefined
            if (!flags['hero-h1-test-es'] || !flags['hero-h1-test-en']) {
              console.warn('⚠️ Feature flags not found in PostHog. Make sure they are configured:')
              console.warn('   1. Go to PostHog → Feature Flags')
              console.warn('   2. Create flags: "hero-h1-test-es" and "hero-h1-test-en"')
              console.warn('   3. Set them as multivariate flags with variants: ["control", "variant_b"]')
              console.warn('   4. Enable the flags and set rollout percentage (e.g., 50% each variant)')
            } else {
              console.log('✅ Both feature flags are configured correctly!')
              console.log('   Spanish variant:', flags['hero-h1-test-es'])
              console.log('   English variant:', flags['hero-h1-test-en'])
            }
          })
          
          // Also check flags immediately if PostHog is already loaded
          setTimeout(() => {
            const esFlag = ph.getFeatureFlag('hero-h1-test-es')
            const enFlag = ph.getFeatureFlag('hero-h1-test-en')
            console.log('🔍 Direct flag check (after 500ms):', {
              'hero-h1-test-es': esFlag || 'undefined',
              'hero-h1-test-en': enFlag || 'undefined'
            })
          }, 500)
          
          // Check flags immediately (synchronous check)
          const immediateEsFlag = ph.getFeatureFlag('hero-h1-test-es')
          const immediateEnFlag = ph.getFeatureFlag('hero-h1-test-en')
          console.log('⚡ Immediate flag check (in loaded callback):', {
            'hero-h1-test-es': immediateEsFlag || 'undefined',
            'hero-h1-test-en': immediateEnFlag || 'undefined'
          })
        },
        
        // Bootstrap removed - PostHog will handle feature flag distribution
        // If you need to bootstrap flags for testing, uncomment below:
        // bootstrap: {
        //   featureFlags: {
        //     'hero-h1-test-es': 'control',
        //     'hero-h1-test-en': 'control'
        //   },
        // },
        
        // Persistence
        persistence: 'localStorage',
        
        // Enable verbose logging
        verbose: true,
      })
      
      console.log('📝 PostHog init() called, waiting for loaded callback...')
    } catch (error) {
      console.error('❌ Error initializing PostHog:', error)
      isInitialized = false
    }
  } else {
    console.log('⚠️ PostHog init skipped: not in browser environment')
  }

  return posthog
}

export default posthog



