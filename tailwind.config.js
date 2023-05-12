/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C7FA5",
        darker: "#1F6287",
        secondary: "#A1B9C7",
        income: "#70A53C",
        expense: "#A53C42"
      },
      zIndex: {
        'bg': '-1',
      },
      rotate: {
        'n45': '-45deg',
      }
    },
  },
  plugins: [],
}

