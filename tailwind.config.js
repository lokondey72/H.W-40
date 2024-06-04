/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backcolor': '#535C91',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}