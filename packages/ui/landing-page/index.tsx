import * as React from "react";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { Section } from "../section";
import Link from "next/link";

export function LandingPage(): JSX.Element {
  return (
    <Section id="home">
      <div>
        <Image
          src="/img/profile.png"
          width={666}
          height={772}
          alt="Profile image"
        />
        <div className="p-4"></div>
        <h1 className="text-white text-xl border-l-2 border-primary pl-2">
          I`&apos;m a{" "}
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">
            skilled fullstack developer and designer
          </b>
          , dedicated to creating innovative and user-friendly solutions that
          seamlessly blend form and function.
        </h1>
      </div>
      <div className="p-4"></div>
      <a href="#portfolio" className="w-full grid place-items-center">
        <div className="animate-bounce">
          <div className="border-2 border-gray-500 rounded-full p-2 bg-gray-800">
            <BsArrowDown size={25} className="text-primary" />
          </div>
        </div>
      </a>
    </Section>
  );
}
