/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        desktop: '1280px',
        tablet: '1024px',
        mobile: '640px'
      },
      colors: {
        10: '#1B1D1F',
        20: '#111315',
        30: '#6F757C',
        40: '#BEE3CC',
        50: '#FEF7EE',
        60: '#F6C768',
        70: '#ED735D'
      },
      fontFamily: {
        DMsans: ["DM Sans", 'sans-serif']
      },
      fontSize: {
        small: '0.625rem',
        price: '0.75rem',
        label: '0.875rem',
        body: '1rem',
        heading: '2rem'

      }
    },
  },
  plugins: [],
}