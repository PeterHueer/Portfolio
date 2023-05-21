// .storybook/preview.js
import "tailwind-config/tailwind.css";
import * as NextImage from "next/image";
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "primary",
    values: [
      {
        name: "secondary",
        value: config.theme.colors.secondary,
      },
    ],
  },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};
