import * as React from "react";
import { Section } from "../section";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type RefCardProps = {
  title: string;
  caption: string;
  imgUrl: string;
  href: string;
};

export function RefCard({
  title,
  caption,
  imgUrl,
  href,
}: RefCardProps): JSX.Element {
  return (
    <Section id="portfolio">
      <div className="rounded-2xl bg-[#090f1c] w-full p-5 text-white">
        <Image
          src={imgUrl}
          alt="unicepta product photos"
          width={600}
          height={388}
        />
        <div className="p-2" />
        <h1 className="text-white border-b-2 border-primary text-lg">
          {title}
        </h1>
        <div className="p-2" />
        <h2 className="text-gray-300">{caption}</h2>
        <div className="p-2" />
        <div className="w-full flex justify-end">
          <Link className="text-primary" href={href}>
            Read more <BsArrowRight className="inline" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
