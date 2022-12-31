const config = require("tailwind-config/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: config.theme,
  plugins: config.plugins,
};
