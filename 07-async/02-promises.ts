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

// Promises ...

// completion or failure a request ...
// Waiter ...
// Promise - pending/settled
//  ... pending
//  ... settled (rejected)
//  ... settled (resolved)

// AbortController

new Promise((resolve, reject) => {
  // do something!!
  reject();

  resolve();
});

const user: Promise<User> = fs
  .readFile("user.json", "utf8")
  .then((data: string) => JSON.parse(data)); // Can't predict!

const regions: Promise<Region> = fs
  .readFile("regions1.json", "utf8")
  .then((data: string) => JSON.parse(data));

const allNews: Promise<News[]> = fs
  .readFile("news.json", "utf8")
  .then((data: string) => JSON.parse(data));

// Promise.all([user, regions, allNews]).then(([user, regions, allNews]) => {
//   const userHeadlines = regions[user.region];
//   const userNews = allNews.filter((article) =>
//     userHeadlines.includes(article.id)
//   );

//   userNews.forEach((news) => {
//     console.log(news.headline);
//     console.log(news.content);
//     console.log("-----");
//   });
// });

Promise.allSettled([user, regions, allNews]).then((responses) => {
  // What will i do with the errored results?
  console.log(
    responses.map((response) => {
      if (response.status === "rejected") {
        return "Something went wrong.";
      } else {
        return response.value;
      }
    })
  );
  // What will i do with the successful results?
  const successful = responses.filter(
    (response) => response.status === "fulfilled"
  );
});
