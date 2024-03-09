/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito", "sans-serif"]
      },
      backgroundColor: {
        'warm-gray': '#F4F2EE'
      },
    },
  },
  plugins: [],
}

