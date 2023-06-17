import * as React from "react";
import { Story } from "@storybook/react";
import Navigation from "./index";

const main = {
  title: "Components/Navigation",
  parameters: {
    backgrounds: {
      default: "secondary",
    },
  },
};

export default main;

export function Default(): ReturnType<Story> {
  return <Navigation />;
}
