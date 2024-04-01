import * as React from "react";
import Navigation from "@phueer/ui/navigation";
import "tailwind-config/tailwind.css";
import Head from "./head";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-pt-[75px]">
    <Head/>
    <body className="bg-secondary h-screen">
    <video autoPlay muted loop className="fixed left-0 top-0 w-full h-full object-cover z-0 object-left">
      <source src="/vid/bg.mp4" type="video/mp4"/>
    </video>
    <Navigation/>
    {children}
    </body>
    </html>
  );
}
