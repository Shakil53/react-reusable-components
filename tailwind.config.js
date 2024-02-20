/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg,#d4d4d8, #e4e4e7)"
      }
    },
  },
  plugins: [],
}

