import {Employer} from "@phueer/types/employer";

export const employer: Employer = {
  adesso: {
    name: "Adesso SE",
    imgUrl: "/img/employer/adesso.png",
    period: {from: new Date(2023, 8), until: new Date()},
  },
  ubermetrics: {
    name: "Ubermetrics Technologies GmbH",
    imgUrl: "/img/employer/ubermetrics_logo.png",
    period: {from: new Date(2023, 5), until: new Date(2023, 7)},
  },
  lise: {
    name: "lise GmbH",
    imgUrl: "/img/employer/lise_logo.png",
    period: {from: new Date(2018, 10), until: new Date(2021, 5)},
  },
};
