/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '86': '21.5rem', // or whatever value you need
      },
      colors: {
        'backColor':'#f7f4ed',
      }
    },
  },
  plugins: [],
}

