/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        back: '#26333C',
        button: '#FF9900',
        blur: '#B5B5B5',
      },
    },
  },
  plugins: [],
};
