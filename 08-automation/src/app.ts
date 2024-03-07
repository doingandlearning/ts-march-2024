// I will write my typescript in here!

console.log("I'm working!!");

// React

const header = document.getElementsByTagName("h1")[0]; // []
header.innerHTML = "BBC JavaScript";

const div = document.getElementById("content") as HTMLDivElement;

const p = document.createElement("p");
p.textContent = "Welcome to our coffee shop!";
div.append(p);

header.style.fontWeight = "100";

console.log(div.childNodes); // This is anything in the HTML + comments
console.log(div.children); // Just HTML elements

const shopLocations = ["Glasgow", "Salford", "London", "Belfast"];
const drinks = ["Americano", "Latte", "Mocha", "Cappacino"];

const shopButton = document.getElementById("shops") as HTMLButtonElement;
const drinkButton = document.getElementById("drinks") as HTMLButtonElement;
const results = document.getElementById("results") as HTMLDivElement;
const inputEl = document.getElementById("test") as HTMLInputElement;

inputEl!.value;

shopButton?.addEventListener("click", () => {
  let container = "<ul>";
  shopLocations.forEach((location) => {
    container += `<li>${location}</li>`;
  });
  container += "</ul>";
  results!.innerHTML = container;
});

drinkButton?.addEventListener("click", () => {
  let container = "<ul>";
  drinks.forEach((drink) => {
    container += `<li>${drink}</li>`;
  });
  container += "</ul>";
  results!.innerHTML = container;
});

// React ...
// jQuery

// imperative ...
