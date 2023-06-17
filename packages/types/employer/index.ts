import { Period } from "../times";

export type Employer = {
  ubermetrics: EmployerData;
  lise: EmployerData;
};

export type EmployerData = {
  name: string;
  imgUrl: string;
  period: Period;
};
