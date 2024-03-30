import { Period } from "../times";

export type Employer = {
  adesso: EmployerData;
  ubermetrics: EmployerData;
  lise: EmployerData;
};

export type EmployerData = {
  name: string;
  imgUrl: string;
  period: Period;
};
