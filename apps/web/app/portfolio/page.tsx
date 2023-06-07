import * as React from "react";
import { portfolio } from "texts/portfolio";
import { RefCard } from "ui/ref-card";

export default function Portfolio(): JSX.Element {
  return (
    <>
      {portfolio.map((portfolioItem) => (
        <RefCard {...portfolioItem} />
      ))}
    </>
  );
}
