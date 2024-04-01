import * as React from "react";
import {LandingPage} from "@phueer/ui/landing-page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <div className="grid xl:grid xl:grid-cols-[minmax(500px,600px)_minmax(700px,_1fr)] gap-8 xl:gap-10 xl:justify-between pt-[75px]">
      <LandingPage/>
      <Portfolio/>
    </div>
  );
}

