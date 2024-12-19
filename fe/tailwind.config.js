/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fffced",
        gold: "#aa8900",
        rose: {
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}