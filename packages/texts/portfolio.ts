import { employer } from "./employee";
import { PortfolioItem } from "@phueer/types";

export const portfolio: PortfolioItem[] = [
  {
    title: "Executive News Briefings",
    caption:
      "Product development of an internal editorial web application " +
      "and a rendered customized digital magazine based on the input of " +
      "the editorial web application.",
    imgUrl: "/img/unicepta.png",
    href: "/portfolio/executive-news-briefings",
    period: { from: new Date(2022, 5), until: new Date() },
    employer: employer.ubermetrics,
    tags: ["React", "Next.JS", "GraphQL", "Prisma", "TDD"],
    tasks: [
      "Social media channels that can be maintained in the editorial web application and the channel presentation in the digital magazine",
      "Backend Permission layer with graphql-shield to only partially deliver article data for a specific license",
      "Ensuring high code quality with TDD",
    ],
  },
  {
    title: "Operation Management-System",
    caption:
      "Development of a web application to manage incident tickets " +
      "that can be created and documented manually and automatically " +
      "based on metrics.",
    href: "/portfolio/operation-management-system",
    period: { from: new Date(2020, 5), until: new Date(2021, 5) },
    employer: employer.lise,
    tags: ["React", "Java", "Spring", "Kafka"],
    tasks: [
      "Responsible for Frontend decisions",
      "Dashboard for the metrics overview",
      "Keycloak login in the client's Styleguide",
      "Data persistence for operational tasks",
    ],
  },
  {
    title: "Workflow-Management-System",
    caption:
      "Implementation of workflows in Camunda, an associated visual overview " +
      "of the various workflow states and automated documentation.",
    href: "/portfolio/workflow-management-system",
    period: { from: new Date(2019, 8), until: new Date(2021, 1) },
    employer: employer.lise,
    tags: ["React", "Java", "Kotlin", "Spring", "Camunda"],
    tasks: [
      "Responsible for frontend decisions",
      "Mockup design and implementation of the Kanban interface",
      "Integration of Camunda workflows into the UI",
      "Creating complex Camunda workflows and automating them in Java",
    ],
  },
];
