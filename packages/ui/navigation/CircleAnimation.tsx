import * as React from "react";
import { HTMLProps } from "react";

export function CircleAnimation(props: HTMLProps<HTMLDivElement>): JSX.Element {
  return (
    <div {...props}>
      <div className="bg-primary absolute bottom-0 left-14 rounded-full w-52 h-52 blur-3xl opacity-20 animate-blob"></div>
      <div className="bg-accent-orange absolute bottom-24 left-1/3 rounded-full w-52 h-52 blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="bg-neutral absolute bottom-0 left-1/2 rounded-full w-52 h-52 blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
}
