import * as React from "react";
import { Story } from "@storybook/react";
import Navigation from "./index";

export default {
  title: "Components/Navigation",
  parameters: {
    backgrounds: {
      default: "secondary",
    },
  },
};

export function Default(): ReturnType<Story> {
  return <Navigation />;
}
