/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2f855a',
        'brand-leaf': '#38a169',
        'brand-earth': '#7b5e3b',
        'brand-cream': '#f8faf5',
      },
    },
  },
  plugins: [],
}
