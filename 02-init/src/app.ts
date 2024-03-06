import fs from "fs";

function firstElement(a: any[]) {
  return a[0];
}

const a_s: string[] = ["one", "two", "three", "four"];
const a_n: Array<number> = [1, 2, 3, 4];
const a_m: (string | number)[] = ["one", 2, "three", 4];
// Array<string|number>

// number[]
console.log(firstElement(a_m));
