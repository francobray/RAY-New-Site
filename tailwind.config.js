/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
          gray: '#A8A8A8',
          darkGray: '#5C5C5C',
        },
      },
      fontFamily: {
        sans: ['Chopin.Trial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ray-gradient': 'linear-gradient(135deg, #7CFFB2 0%, #C9E57C 50%, #FFD27A 100%)',
      },
    },
  },
  plugins: [],
}