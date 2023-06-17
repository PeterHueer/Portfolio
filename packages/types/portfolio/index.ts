import { Tags } from "../tags";
import { Period } from "../times";
import { EmployerData } from "../employer";

export type PortfolioItem = {
  title: string;
  caption: string;
  imgUrl?: string;
  href: string;
  period: Period;
  employer: EmployerData;
  tasks: string[];
  tags: Tags[];
};
