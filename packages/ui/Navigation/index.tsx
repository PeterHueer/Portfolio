"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Navigation(): JSX.Element {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="list-none flex flex-column">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">Home</NavigationMenu.Trigger>
          <NavigationMenu.Content>Item one content</NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">About</NavigationMenu.Trigger>
          <NavigationMenu.Content>Item one content</NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">
            Portfolio
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>Item one content</NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* NavigationMenu.Content will be rendered here when active */}
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
