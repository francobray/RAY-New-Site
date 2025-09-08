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
          promise: {
            start: '#34d399', // green-400 (25% lighter than green-500)
            mid: '#fef08a',   // yellow-200 (25% lighter than yellow-300)
            end: '#fcd34d',   // yellow-300 (25% lighter than yellow-400)
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
        'ray-promise': 'linear-gradient(to right, #34d399, #fef08a, #fcd34d)',
      },
    },
  },
  plugins: [],
}