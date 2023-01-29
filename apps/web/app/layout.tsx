import * as React from "react";
import "tailwind-config/tailwind.css";
import Navigation from "../../../packages/ui/navigation";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Navigation />
        <div>{children}</div>
      </body>
    </html>
  );
}
