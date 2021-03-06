module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ECF0F1',
        'primary': '#26A69A',
        'secondary': '#00796B',

        'background-dark': '#37474F',
        'secondary-dark': '#263238',
      }
    },
  },
  plugins: [],
}
