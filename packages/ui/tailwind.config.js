const config = require("tailwind-config/default.config");
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: config.theme,
  plugins: config.plugins,
};
