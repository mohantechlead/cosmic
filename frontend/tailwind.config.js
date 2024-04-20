/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#BFBFBF',
        'blue': '#011422',
      },
      fontFamily: {
        body: ['Lato']
      },
      backgroundImage: {
        'cosmic-pattern': "url('/public/img/bg-1.jpg')"
      },
    },
  },
  plugins: [],
}

