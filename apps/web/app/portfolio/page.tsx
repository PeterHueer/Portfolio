import * as React from "react";
import { Section } from "ui/section";
import Image from "next/image";

export default function Portfolio(): JSX.Element {
  return (
    <Section id="portfolio">
      <div className="rounded-2xl bg-[#090f1c] w-full h-72 p-5 ">
        <Image
          src="/img/unicepta.png"
          alt="unicepta product photos"
          width={600}
          height={388}
        />
        <h1 className="text-white">Executive News Briefings</h1>
        <h2>
          Product development of an internal editorial web application and a
          rendered customized digital magazine based on the input of the
          editorial web application.
        </h2>
      </div>
    </Section>
  );
}
