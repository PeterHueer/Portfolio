type PortfolioItem = {
  title: string;
  caption: string;
  imgUrl: string;
  href: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Executive News Briefings",
    caption:
      "Product development of an internal editorial web application " +
      "and a rendered customized digital magazine based on the input of " +
      "the editorial web application.",
    href: "/portfolio/executive-news-briefings",
    imgUrl: "/img/unicepta.png",
  },
];
