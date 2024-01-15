/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'coverImg': "url('./src/assets/slider01-with-curved.jpg')",
        'portBg': "url('./src/assets/industry-port-operation-bg.jpg')",
        'marineBg': "url('./src/assets/industry-marine-bg.jpg')",
        'millBg': "url('./src/assets/industry-steel-mill-bg.jpg')",
        'commercialBg': "url('./src/assets/industry-commercial-vehicles-bg.jpg')",
        'transformersBg': "url('./src/assets/industry-transformers-bg.jpg')",
        'oilBg': "url('./src/assets/industry-oil-rigs-bg.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
