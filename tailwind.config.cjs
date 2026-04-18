/*@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        primary: "#FFCC00", 
        secondary: "#1A1A1A",
      },
      fontFamily: {
       rubik: ["Rubik", "sans-serif"],
      },
      fontSize:{
        
      },
      maxWidth:{
        '4.7xl':'90rem'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}