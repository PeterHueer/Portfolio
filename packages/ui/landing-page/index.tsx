import * as React from "react";
import {Section} from "../section";
import Image from "next/image";
import {BsArrowDown} from "react-icons/bs";

export function LandingPage(): JSX.Element {
  return (
    <Section id="home">
      <div className="flex flex-col justify-center xl:mt-0 gap-10">
        <Image
          src="/img/profile.png"
          width={666}
          height={772}
          alt="Profile image"
        />
        <div
          className="bg-secondary p-5 rounded bg-opacity-80 backdrop-blur text-xl xl:text-3xl xl:border-l-2 border-primary mt-[-100px]">
          <h1 className="text-white pl-4">
            I&apos;m a{" "}
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">
              skilled fullstack developer and designer
            </b>
            , dedicated to creating innovative and user-friendly solutions that
            seamlessly blend form and function.
          </h1>
        </div>
        <a href="#portfolio" className="w-full grid place-items-center xl:hidden">
          <div className="animate-bounce">
            <div className="border-2 border-gray-500 rounded-full p-2 bg-gray-800">
              <BsArrowDown size={25} className="text-primary"/>
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}
