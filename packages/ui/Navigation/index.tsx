"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Navigation(): JSX.Element {
  const items = ["Home", "About", "Portfolio"];
  return (
    <NavigationMenu.Root className={"text-text-light text-xs"}>
      <NavigationMenu.List
        className={"list-none flex flex-column gap-5 bg-primary pr-2 pl-2"}
      >
        {items.map((item) => (
          <NavigationMenu.Item
            className={"hover:text-text transition-colors duration-200"}
          >
            <NavigationMenu.Trigger className={"pb-2 pt-2"}>
              {item}
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      {/* NavigationMenu.Content will be rendered here when active */}
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
