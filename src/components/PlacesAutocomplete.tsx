'use client'

import { useEffect, useRef, useState } from 'react'

// Simple global state without callbacks
let isGoogleMapsLoaded = false
let googleMapsPromise: Promise<void> | null = null

const loadGoogleMapsScript = (apiKey: string): Promise<void> => {
  // Return existing promise if already loading
  if (googleMapsPromise) {
    return googleMapsPromise
  }

  // Check if already loaded
  if (isGoogleMapsLoaded || (window as any).google?.maps?.places?.Autocomplete) {
    isGoogleMapsLoaded = true
    return Promise.resolve()
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    // Remove any existing scripts completely
    const existingScripts = document.querySelectorAll('script[src*="maps.googleapis.com"]')
    existingScripts.forEach(script => script.remove())

    // Clean up any residual elements or callbacks
    const cleanup = () => {
      // Remove custom elements
      const customElements = ['gmp-place-opening-hours', 'gmp-place-summary', 'gmp-place-type-specific-highlights', 'gmp-place-reviews', 'gmp-place-plus-code', 'gmp-place-feature-list']
      customElements.forEach(tagName => {
        document.querySelectorAll(tagName).forEach(el => el.remove())
      })

      // Clean callbacks
      Object.keys(window).forEach(key => {
        if (key.includes('initGoogle') || key.includes('gmapsCallback') || key.includes('googleMapsAutocomplete')) {
          delete (window as any)[key]
        }
      })
    }

    cleanup()

    // Load without callback - poll for availability instead
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=weekly&loading=async`
    script.async = true
    script.defer = true
    script.id = `google-maps-${Date.now()}`

    script.onload = () => {
      // Poll for Google Maps availability
      const checkGoogleMaps = () => {
        if ((window as any).google?.maps?.places?.Autocomplete) {
          isGoogleMapsLoaded = true
          resolve()
        } else {
          setTimeout(checkGoogleMaps, 100)
        }
      }
      checkGoogleMaps()
    }

    script.onerror = () => {
      googleMapsPromise = null
      reject(new Error('Failed to load Google Maps'))
    }

    document.head.appendChild(script)
  })

  return googleMapsPromise
}

interface PlacesAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  name?: string
  required?: boolean
}

const PlacesAutocomplete = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  name,
  required = false 
}: PlacesAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initAutocomplete = () => {
      if (inputRef.current && (window as any).google?.maps?.places?.Autocomplete) {
        try {
          // Initialize autocomplete
          autocompleteRef.current = new (window as any).google.maps.places.Autocomplete(
            inputRef.current,
            {
              types: ['establishment'],
              fields: ['name', 'formatted_address', 'place_id', 'types'],
            }
          )

          // Add place changed listener
          if (autocompleteRef.current) {
            autocompleteRef.current.addListener('place_changed', () => {
              const place = autocompleteRef.current?.getPlace()
              
              if (place && place.name) {
                onChange(place.name)
              }
            })
          }

          setIsLoaded(true)
          setError(null)
        } catch (error) {
          console.error('Error initializing autocomplete:', error)
          setError('Failed to initialize autocomplete')
        }
      }
    }

    const initializeGoogleMaps = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        
        if (!apiKey) {
          console.warn('Google Maps API key not found. Fallback to regular input.')
          setError('Google Maps API key not configured')
          return
        }

        // Check if already loaded
        if (isGoogleMapsLoaded || (window as any).google?.maps?.places?.Autocomplete) {
          initAutocomplete()
          return
        }

        // Load Google Maps
        await loadGoogleMapsScript(apiKey)
        
        // Initialize autocomplete after loading
        initAutocomplete()
        
      } catch (error) {
        console.error('Error loading Google Maps API:', error)
        setError('Failed to load Google Maps API')
      }
    }

    initializeGoogleMaps()

    // Cleanup
    return () => {
      if (autocompleteRef.current && (window as any).google?.maps?.event?.clearInstanceListeners) {
        try {
          (window as any).google.maps.event.clearInstanceListeners(autocompleteRef.current)
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    }
  }, [])

  // Handle manual input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  // If there's an error or Google Maps isn't loaded, show regular input
  if (error || !isLoaded) {
    return (
      <div>
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={className}
          required={required}
        />
        {error && (
          <p className="text-xs text-gray-500 mt-1">
            Using standard text input (Google Places API not available)
          </p>
        )}
      </div>
    )
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={className}
        required={required}
      />
    </div>
  )
}

export default PlacesAutocomplete
