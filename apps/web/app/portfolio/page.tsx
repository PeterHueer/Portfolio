import * as React from "react";
import { RefCard } from "@phueer/ui/ref-card";
import { Section } from "@phueer/ui/section";
import { portfolio } from "@phueer/texts/portfolio";

export default function Portfolio(): JSX.Element {
  return (
    <Section id="portfolio">
      <div className="grid gap-2">
        {portfolio.map((portfolioItem) => (
          <RefCard {...portfolioItem} />
        ))}
      </div>
    </Section>
  );
}
