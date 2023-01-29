import * as React from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/all";
import { ButtonHTMLAttributes, HTMLProps } from "react";
import { PrimitiveButtonProps } from "@radix-ui/react-navigation-menu";

type BurgerButtonProps = {
  active: boolean;
  onClick: () => void;
};

export function BurgerButton({
  active,
  onClick,
}: BurgerButtonProps): JSX.Element {
  if (active) {
    return (
      <button onClick={onClick}>
        <RxCross1 size="25" />
      </button>
    );
  }
  return (
    <div onClick={onClick}>
      <RxHamburgerMenu size="25" />
    </div>
  );
}
