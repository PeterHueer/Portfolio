import * as React from "react";
import { LandingPage } from "@phueer/ui/landing-page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Portfolio />
    </div>
  );
}
