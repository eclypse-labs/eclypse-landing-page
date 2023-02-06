/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"],
          montserratSemiBold: ["Montserrat", "sans-serif"],
          montserratBold: ["Montserrat", "sans-serif"],
          montserratExtraBold: ["Montserrat", "sans-serif"],
          montserratBlack: ["Montserrat", "sans-serif"],
        },
        current: "currentColor",
        color1: "#FFFFFF",
        primary1: "#FE13CA", //Purple 1
        primary2: "#DB00FF", //Purple 2
        primary3: "#A64DFF", //Purple 3
        primary4: "#3413FE", //Purple 4
        primary5: "#9545E5"
        // from lighter to darker
      },
    },
  },
  plugins: [],
}
