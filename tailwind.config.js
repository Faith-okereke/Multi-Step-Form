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
      },
      borderColor:{
        blue: " hsl(206, 94%, 87%)"
      }
    },
  },
  plugins: [],
}

