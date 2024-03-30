import {employer} from "./employee";
import {PortfolioItem} from "@phueer/types";

export const portfolio: PortfolioItem[] = [
  {
    title: "Meine KKH",
    caption: "Product development of a UI design library and its web application for the German health insurance company Hannover.",
    href: "/portfolio/kkh",
    employer: employer.adesso,
    tags: ["Vue.js"],
    image: {
      url: "/img/kkh.jpeg",
      author: {
        name: "KKH",
        url: "https://www.kkh.de/meine-kkh/online-services"
      }
    },
    tasks: [
      "Design and implementation of UI Design Library components",
      "Memory leak analysis with MemLab",
      "Concept planning for merging various micro frontend services into a main application using module federation"
    ],
    period: {from: new Date(2024, 6), until: new Date()}
  },
  {
    title: "Banking UI Design Library",
    caption: "Product development of an UI design library for various internal banking projects",
    href: "/portfolio/atruvia",
    employer: employer.adesso,
    tags: ["Vue.js"],
    image: {
      url: "/img/atruvia.png",
      author: {
        name: "Atruvia AG",
        url: "https://de.m.wikipedia.org/wiki/Datei:Atruvia_logo.svg"
      }
    },
    tasks: [
      "Design and implementation of UI Design Library components",
      "Memory leak analysis with MemLab",
      "Concept planning for merging various micro frontend services into a main application using module federation"

    ],
    period: {from: new Date(2023, 9), until: new Date()}
  },
  {
    title: "Executive News Briefings",
    caption:
      "Product development of an internal editorial web application " +
      "and a rendered customized digital magazine based on the input of " +
      "the editorial web application.",
    image: {
      url: "/img/unicepta.png",
      author: {
        name: "Unicepta",
        url: "https://products.unicepta.com/de/unicepta-news-briefing",
      },
    },
    href: "/portfolio/executive-news-briefings",
    period: {from: new Date(2022, 5), until: new Date()},
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
    image: {
      url: "/img/operation.jpg",
      author: {
        name: "geralt",
        url: "https://pixabay.com/users/geralt-9301/",
      },
    },
    href: "/portfolio/operation-management-system",
    period: {from: new Date(2020, 5), until: new Date(2021, 5)},
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
    image: {
      url: "/img/workflow.jpg",
      author: {
        name: "Lukas",
        url: "https://www.pexels.com/@goumbik/",
      },
    },
    period: {from: new Date(2019, 8), until: new Date(2021, 1)},
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
