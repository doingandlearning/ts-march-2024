// Modular
// Reusable
// Composable
// Don't repeat yourself => DRY

// <>

// 1. We know the types of the parameters!
function echoString(input: string) {
  return input;
}

const message = echoString("Hello TypeScript!");

function sum(a: number, b: number) {
  return a + b;
}

const result = sum(1, 2);

// 2. If we don't know ...

function logUnknownAndReturn(input: unknown) {
  if (typeof input === "string") {
    console.log("String:", input);
    return input;
  } else {
    return false;
  }
}

const use1 = logUnknownAndReturn("hello");

// 3. Type narrowing

function isString(input: unknown): input is string {
  return typeof input === "string";
}

const unknownVar: unknown = 12;

if (isString(unknownVar)) {
  unknownVar;
}

// interface User {
//   name: string;
//   id: string;
// }
// function isUser(input: unknown): input is User {
//   if () {
//     return false;
//   }
//   if (!input?.name) {
//     return false;
//   }
// }
