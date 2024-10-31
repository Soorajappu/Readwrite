/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(329deg, rgba(247,111,6,1) 17%, rgba(255,244,0,1) 97%);',
      },
      screens: {
        'xs': '320px',
      },
      fontFamily: {
        Noto_Sans_Malayalam :["Noto Sans Malayalam", "sans-serif"]
      }
    },
  },
  plugins: [],
}

