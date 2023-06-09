/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1025px',
      xl: '1366px',
      "2xl":"1448px",
      '3xl':'1920px',
    },
    extend: {
      colors: {
        darkest: "#12131A",
        darker: "15161C",
        dark: "#1F2029",
        secondary: "#736E6C",
        light: "#84ADAB",
        accent: "#F26C4F",
        "accent-lighter":"#FFA997",
        "accent-lightest":"#FFCEC3",
        input: "#CEC7C3",
      },
      backgroundImage: {
        hero: "url('./src/assets/background.png')"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "sans-serif"],
      },
      animation: {
        show: "show .3s"
      },
      keyframes: {
        show: {
          "0%": {opacity: "0%"},
          "100%": {opacity: "100%"},
        }
      }
    },
  },
  plugins: [],
}

