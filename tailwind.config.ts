import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ray: {
          black: '#1C1C1C',
          green: '#6FBF73',
          blue: '#0D79E5',
          dark: {
            900: '#111111',
            700: '#222222',
            500: '#444444',
          },
          gradient: {
            start: '#7CFFB2',
            mid: '#C9E57C',
            end: '#FFD27A',
          },
          promise: {
            start: '#34d399',
            mid: '#fef08a',
            end: '#fcd34d',
          },
          gray: '#A8A8A8',
          darkGray: '#5C5C5C',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'ray-gradient': 'linear-gradient(135deg, #7CFFB2 0%, #C9E57C 50%, #FFD27A 100%)',
        'ray-promise': 'linear-gradient(to right, #34d399, #fef08a, #fcd34d)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'gradient-x': 'gradientX 3s ease infinite',
        'expand': 'expand 0.6s ease-out 0.3s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { 
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': { 
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
        expand: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

export default config
