import * as React from "react";
import { RefCard } from "@phueer/ui/ref-card";
import { Section } from "@phueer/ui/section";
import { portfolio } from "@phueer/texts/portfolio";

export default function Portfolio(): JSX.Element {
  return (
    <Section id="portfolio">
      <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-2 flex-wrap">
        {portfolio.map((portfolioItem) => (
          <RefCard {...portfolioItem} />
        ))}
      </div>
    </Section>
  );
}
