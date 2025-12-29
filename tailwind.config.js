/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#f5f5f5', // Adjust as needed
      },
      backgroundImage: {
        'grain': "url('/grain.png')", // We might need to generate this or use CSS noise
      }
    },
  },
  plugins: [],
}
