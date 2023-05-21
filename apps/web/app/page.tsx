import * as React from "react";
import Portfolio from "./portfolio/page";
import { LandingPage } from "ui/landing-page";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Portfolio />
    </div>
  );
}
