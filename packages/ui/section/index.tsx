import * as React from "react";

export function Section({
  id,
  children,
}: React.PropsWithChildren & { id: string }): JSX.Element {
  return (
    <section
      id={id}
      className="h-[calc(100vh-75px)] flex justify-between flex-wrap p-5"
    >
      {children}
    </section>
  );
}
