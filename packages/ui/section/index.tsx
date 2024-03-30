import * as React from "react";

export function Section({
  id,
  children,
}: React.PropsWithChildren & { id: string }): JSX.Element {
  return (
    <section id={id} className="flex flex-wrap xl:p-5 relative h-[calc(100vh-75px)]">
      {children}
    </section>
  );
}
