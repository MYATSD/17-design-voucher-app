/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ["Montserrat", "Padauk", "san-serif"]
    },
    extend: {
      fontFamily:{
        header: ["Poppins","san-serif"]
      }
    },
  },
  plugins: [
    
    require('flowbite/plugin')
  ],
}

