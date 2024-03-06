import fs from "fs";
import { upperCaseString as toUpper } from "./stringFunctions";
import data from "./info.json";
import { readFileSync } from "fs";

console.log(data);

console.log(JSON.parse(readFileSync("./src/info.json").toString()));

console.log(toUpper("i am lowercase"));

// console.log(fs.readFileSync("../readme.md").toString());
function firstElement(a: any[]) {
  return a[0];
}

const a_s: string[] = ["one", "two", "three", "four"];
const a_n: Array<number> = [1, 2, 3, 4];
const a_m: (string | number)[] = ["one", 2, "three", 4];
// Array<string|number>

// number[]
console.log(firstElement(a_m));
