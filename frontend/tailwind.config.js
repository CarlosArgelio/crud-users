/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       icon: "url('/src/assets/icon.png')",
      },
    },
  },
  plugins: [],
}