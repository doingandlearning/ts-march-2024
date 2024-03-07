import fs from "node:fs/promises";

interface User {
  name: string;
  age: number;
  region: string;
}

type Regions = "NI" | "Scotland" | "SE" | "South" | "North";
// Dictionary type
interface Region {
  [region: string]: Array<string>;
}

interface News {
  id: string;
  headline: string;
  content: string;
}

async function run() {
  try {
    const user: User = await fs
      .readFile("user.json", "utf8")
      .then((data: string) => JSON.parse(data)); // Can't predict!

    const regionsPromise: Promise<Region> = fs
      .readFile("regions.json", "utf8")
      .then((data: string) => JSON.parse(data));

    const allNewsPromise: Promise<News[]> = fs
      .readFile("news.json", "utf8")
      .then((data: string) => JSON.parse(data));

    const [regions, allNews] = await Promise.all([
      regionsPromise,
      allNewsPromise,
    ]);

    const userHeadlines = regions[user.region];
    const userNews = allNews.filter((article) =>
      userHeadlines.includes(article.id)
    );

    userNews.forEach((news) => {
      console.log(news.headline);
      console.log(news.content);
      console.log("-----");
    });

    return "Hello";
  } catch (error) {
    // Rejection is async
    // Exception is sync
  }
}

run();
