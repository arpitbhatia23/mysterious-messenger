/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'imprint': ['Imprint MT Shadow', 'serif'],
      },
    },
  },
  plugins: [],
}