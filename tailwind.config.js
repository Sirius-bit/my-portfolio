/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'instagram': "url('src/assets/img/social/instagram.svg')",
        'linkedIn': "url('src/assets/img/social/linkedin.svg')",
        'github': "url('src/assets/img/social/github.svg')",
        'mystery': "url('src/assets/img/social/interrogation-mark.png')"
      },
      screens: {
        'md-homepage': '570px'
      },
      colors: {
        'blue': '#003049',
        'red': '#d62828',
        'orange': '#f77f00',
        'yellow': '#fcbf49',
        'beige': '#eae2b7'
      }
    },
  },
  plugins: [],
}

