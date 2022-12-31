const config = require("tailwind-config/default.config");
module.exports = {
  content: ["./apps/packages/**/*.stories.@(js|jsx|ts|tsx)"],
  theme: config.theme,
  plugins: config.plugins,
};
