import * as React from "react";
import {LandingPage} from "@phueer/ui/landing-page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <div className="grid xl:grid xl:grid-cols-[minmax(330px,600px)_minmax(900px,_1fr)] gap-8 xl:gap-10 xl:justify-between">
      <video autoPlay muted loop className="absolute left-0 top-0 w-full h-screen object-cover z-0 object-left">
        <source src="/vid/bg.mp4" type="video/mp4"/>
      </video>
      <LandingPage/>
      <Portfolio/>
    </div>
  );
}
