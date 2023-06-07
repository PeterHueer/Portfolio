"use client";
import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { BsArrowDown } from "react-icons/bs";

type AccordionProps = { title: string };

export function Accordion({
  title,
  children,
}: React.PropsWithChildren<AccordionProps>): JSX.Element {
  return (
    <RadixAccordion.Root type="single" defaultValue="1" collapsible={true}>
      <RadixAccordion.Item value="1">
        <RadixAccordion.Header className="text-white grid place-items-center">
          <RadixAccordion.Trigger className="grid place-items-center">
            <p>{title}</p>
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <RadixAccordion.Content>{children}</RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
}
