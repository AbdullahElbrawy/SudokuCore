/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "main":"#E61300",
       "sub":"#1F1F1F",
       "white":"#ffffff"
      }
    },
  },
  plugins: [],
};