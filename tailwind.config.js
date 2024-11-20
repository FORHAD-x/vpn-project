/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandColor:"#F53838"
      }
    },
    container:{
      center:true,
    },
    fontFamily:{
      "rubik":["Rubik", "sans-serif"]
    }
   
  },
  plugins: [],
}
