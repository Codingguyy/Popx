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
        heading: ["Roboto Mono", "monospace"],
        body: ["Monospace", "sans-serif"],
      },
      fontSize:{
        'xms':'0.8rem',
        'xm':'0.7rem',
        'xxs':'0.6rem',
        'msx':'0.65rem',
        'ms':'1.1rem',
        'xxxs':'0.7rem',
        'tsx':'0.5rem',
        'tsxx':'0.57rem',
        'txs':'0.47rem',
        'bxt':'2.17rem',
        'xxl':'1.52rem',
        'mxl':'1.35rem',
        '2.8xl':'1.79rem'
      },
      maxWidth:{
        '9xl':'120rem',
        '8.5xl':'115.25rem',
        '7.5xl':'83.25rem',
        '4.5xl':'2.7rem',
        '7.3xl':'4.7rem',
        '8.3xl':'62.5rem',
        '7.7xl':'99.8375rem',
        '7.1xl':'110.13rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}