"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringFunctions_1 = require("./stringFunctions");
// import data from "./info.json";
console.log((0, stringFunctions_1.upperCaseString)("i am lowercase"));
// console.log(fs.readFileSync("../readme.md").toString());
function firstElement(a) {
    return a[0];
}
const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];
// Array<string|number>
// number[]
console.log(firstElement(a_m));
