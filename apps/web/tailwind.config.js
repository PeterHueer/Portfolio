const config = require("tailwind-config/default.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: config.theme,
  plugins: config.plugins,
};
