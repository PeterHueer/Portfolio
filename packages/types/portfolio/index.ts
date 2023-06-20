import { Tags } from "../tags";
import { Period } from "../times";
import { EmployerData } from "../employer";

type Author = {
  name: string;
  url: string;
};

type Image = {
  url: string;
  author: Author;
};

export type PortfolioItem = {
  title: string;
  caption: string;
  image?: Image;
  href: string;
  period: Period;
  employer: EmployerData;
  tasks: string[];
  tags: Tags[];
  demoUrl?: string;
};
