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
        'notFound': "url('https://i.ibb.co/tT0HWvkn/404.gif')"
      }
    },
  },
  plugins: [require("daisyui")],
}
