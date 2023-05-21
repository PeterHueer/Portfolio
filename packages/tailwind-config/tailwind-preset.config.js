const path = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        primary: "#FCA311",
        secondary: "#14213D",
        secondaryDark: "#090f1c",
        neutral: "#000000",
        "text-light": "#EEEEFF",
        "text-dark": "#271033",
        accent: "#E3B505",
        "accent-orange": "#D84727",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
