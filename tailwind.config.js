const config = require("tailwind-config/tailwind.config");
module.exports = {
  content: ["./packages/**/*.{js,ts,jsx,tsx}"],
  theme: config.theme,
  plugins: config.plugins,
};
