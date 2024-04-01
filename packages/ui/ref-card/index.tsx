import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs";
import {PortfolioItem} from "@phueer/types";

export function RefCard({
                          title,
                          caption,
                          image: imgUrl,
                          href,
                        }: PortfolioItem): JSX.Element {
  return (
    <div className="flex flex-col gap-4 lg:rounded-2xl bg-[#090f1c] p-5 text-white bg-opacity-50 backdrop-blur-2xl">
      {imgUrl && (
        <Image
          src={imgUrl?.url}
          alt="unicepta product photos"
          width={600}
          height={388}
          className="xl:h-[200px] h-[200px] object-cover"
        />
      )}
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="text-white border-b-2 border-primary text-lg">{title}</h1>
        <h2 className="text-gray-300 flex-1">{caption}</h2>
      </div>
      <div className="w-full flex justify-end">
        <Link className="text-primary" href={href}>
          Read more <BsArrowRight className="inline"/>
        </Link>
      </div>
    </div>
  );
}
