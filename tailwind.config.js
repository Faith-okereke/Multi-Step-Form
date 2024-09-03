/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marineBlue': "hsl(213, 96%, 18%)",
        'purpleBlue': "hsl(243, 100%, 62%)",
        'coolGray': "hsl(231, 11%, 63%)",
        'lightGray': "hsl(229, 24%, 87%)",
        'pastelBlue': "hsl(228, 100%, 84%)",
        'lightBlue': "hsl(206, 94%, 87%)"

      },
      borderColor: {
        ' blue': " hsl(206, 94%, 87%)",
        'coolGray': "hsl(231, 11%, 63%)",
      },
      backgroundColor: {
        'alabaster': "hsl(231, 100%, 99%)",
        'marineBlue': "hsl(213, 96%, 18%)",
        'fullWhite': "hsl(217, 100%, 97%)",
        'purpleBlue': "hsl(243, 100%, 62%)",
      },
      backgroundImage:{
        'desktop' :"url('../../../public/bg-sidebar-desktop.svg')",
        'mobile' :"url('../../../public/bg-sidebar-mobile.svg')"
      }
    },
  },
  plugins: [],
}

