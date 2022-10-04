/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        industryblack: ["INDUSTRYBLACK", "sans-serif"],
        industryblackitalic: ["INDUSTRYBLACKITALIC", "sans-serif"],
        industrybold: ["INDUSTRYBOLD", "sans-serif"],
        industrybolditalic: ["INDUSTRYBOLDITALIC", "sans-serif"],
        industrybook: ["INDUSTRYBOOK", "sans-serif"],
        industrybookitalic: ["INDUSTRYBOOKITALIC", "sans-serif"],
        industrydemi: ["INDUSTRYDEMI", "sans-serif"],
        industrydemiitalic: ["INDUSTRYDEMIITALIC", "sans-serif"],
        industrylight: ["INDUSTRYLIGHT", "sans-serif"],
        industrylightitalic: ["INDUSTRYLIGHTITALIC", "sans-serif"],
        industrymedium: ["INDUSTRYMEDIUM", "sans-serif"],
        industrymediumitalic: ["INDUSTRYMEDIUMITALIC", "sans-serif"],
      }
    },
  },
  plugins: [],
};

