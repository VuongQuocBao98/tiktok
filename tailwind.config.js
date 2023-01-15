/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Inf: ["InriaSerif-Bold", "Sans-serif"],
      InfRegular: ["InriaSerif-Regular", "Sans-serif"],
      ...fontFamily,
    },
  },
  plugins: [],
};
