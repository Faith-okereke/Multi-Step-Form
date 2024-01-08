/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "hsl(213, 96%, 18%)",
      transparent: "rgba(0, 0, 0, 0)",
      black: "rgb(0, 0, 0)",
      white: "rgba(255, 255, 255)",
    },
    fontFamily:{
      
    }
  },
  plugins: [],
}

