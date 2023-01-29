/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#E3B505",
        secondary: "#271033",
        neutral: "#EEEEFF",
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
