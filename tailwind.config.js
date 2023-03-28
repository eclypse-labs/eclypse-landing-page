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
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratSemiBold: ["Montserrat", "sans-serif"],
        montserratBold: ["Montserrat", "sans-serif"],
        montserratExtraBold: ["Montserrat", "sans-serif"],
        montserratBlack: ["Montserrat", "sans-serif"],
      },
      colors: {
        current: "currentColor",
        color1: "#FFFFFF",
        primary1: "#FE13CA", //Purple 1
        primary2: "#DB00FF", //Purple 2
        primary3: "#A64DFF", //Purple 3
        primary4: "#3413FE", //Purple 4
        primary5: "#9545E5",
        primary6: "#C398EE", //Pink 1
        primary7: "#D9C0F3", //Pink 2 - very light
        primary8: "#DA4EC5" //Red/Pink
        // from lighter to darker
      },
    },
  },
  plugins: [],
}
