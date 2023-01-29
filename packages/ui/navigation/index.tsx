"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CircleAnimation } from "./CircleAnimation";
import { Brand } from "../brand";
import { SocialMedia } from "../social-media";
import { BurgerButton } from "./BurgerButton";

export default function Navigation(): JSX.Element {
  const [navActive, setNavActive] = React.useState(false);
  const items = ["Portfolio", "Profil", "Skills", "Kontakt"];

  return (
    <NavigationMenu.Root
      className={`fixed flex flex-col bg-secondary relative flex text-text-light w-screen p-5 z-10 overflow-hidden ${
        navActive ? "h-screen" : "h-auto"
      }`}
    >
      <div className="flex justify-between">
        <Brand />
        <BurgerButton
          active={navActive}
          onClick={() => setNavActive((prev) => !prev)}
        />
      </div>
      {navActive && (
        <>
          <div className="h-10" />
          <CircleAnimation className="absolute top-1/2" />
          <NavigationMenu.List
            className={"list-none flex flex-col text-5xl font-bold gap-y-5"}
          >
            {items.map((item) => (
              <NavigationMenu.Item
                key={item}
                className={"hover:text-text transition-colors duration-200"}
              >
                <NavigationMenu.Trigger className={"pb-2 pt-2"}>
                  {item}
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
          <div className="h-10" />
          <SocialMedia />
          {/* NavigationMenu.Content will be rendered here when active */}
          <NavigationMenu.Viewport />
        </>
      )}
    </NavigationMenu.Root>
  );
}
