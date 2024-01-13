/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue : "hsl(213, 96%, 18%)",
        marineBlue : "hsl(213, 96%, 18%)",
        coolGray : "hsl(231, 11%, 63%)"
        
      },
      borderColor:{
        blue: " hsl(206, 94%, 87%)"
      },
      backgroundColor:{
        alabaster : "hsl(231, 100%, 99%)",
        marineBlue : "hsl(213, 96%, 18%)"
      }
    },
  },
  plugins: [],
}

