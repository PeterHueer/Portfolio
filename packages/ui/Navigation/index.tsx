"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Navigation(): JSX.Element {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="list-none">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">Item one</NavigationMenu.Trigger>
          <NavigationMenu.Content>Item one content</NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* NavigationMenu.Content will be rendered here when active */}
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
