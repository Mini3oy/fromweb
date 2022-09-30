/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 0 35px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}