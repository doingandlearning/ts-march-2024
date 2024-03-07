import fs from "node:fs";

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

// Callback hell!!
fs.readFile("user.json", "utf-8", (error: Error | null, userData: string) => {
  if (error) {
    console.log(error);
    return;
  }

  fs.readFile(
    "regions.json",
    "utf-8",
    (error: Error | null, regionData: string) => {
      if (error) {
        console.log(error);
        return;
      }
      fs.readFile(
        "news.json",
        "utf-8",
        (error: Error | null, newsData: string) => {
          if (error) {
            console.log(error);
            return;
          }

          const user = JSON.parse(userData);
          const regions = JSON.parse(regionData);
          const allNews = JSON.parse(newsData);
          const userHeadlines = regions[user.region];
          const userNews = allNews.filter((article) =>
            userHeadlines.includes(article.id)
          );

          userNews.forEach((news) => {
            console.log(news.headline);
            console.log(news.content);
            console.log("-----");
          });
        }
      );
    }
  );
}); // When are you going to return??
