// es6 -> es2015

// 1. Default parameters

function areaOfRect(length = 10, width = length) {
  return length * width;
}

const rect1 = areaOfRect(10, 5);
const square = areaOfRect(10);

// 2. Template literals

const greeting =
  "Hello, rect1 you have an area of " + rect1 + " units squared.";

const greetingLiteral = `Hello, rect1 you have an area ${rect1} units squared.



So this is still in the literal!`;

// Handlebars ...

function generatePage(body) {
  return `
	<html>
		<body>
		  ${body}
		</body>
	</html>`;
}

generatePage("<p>I am on the page</p>");

// 3. Object literals

let variable; // inferred the any
variable = {};

function getLaptop(make: string, model: string, year: number) {
  // implied the any
  return {
    make,
    model,
    year,
  };
}

// 4. Arrow functions

// lambda
function add(a: number, b: number) {
  return a + b;
}

const add1 = (a: number, b: number): number => {
  console.log("I'm about to do some adding ... so exciting!");
  return a + b;
};

// this!

const person = {
  name: "Chris",
  sayMyName: function () {
    console.log(`My name is ${this.name}.`);
  },
};

class Person {
  sayMyName() {}
}

// 5. var/let/const

// Just don't use var!

function simulateDom() {
  const pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };

  for (let i = 1; i <= 3; i++) {
    const element = pseudoDom[`button${i}`];
    element.click = function () {
      return `Item ${i} is clicked.`;
    };
  }

  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click());
}

simulateDom();
// Item 3 is clicked x 3    (3)
// ~Item 1 is clicked x 3~   ()
// Item 1 .. Item 2 ... Item 3  (3)

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);

const arr3 = [
  { name: "Rolando", location: "London" },
  { name: "Jack", location: "Glasgow" },
];

const arr4 = structuredClone(arr3); // equivalent to JSON.parse(JSON.stringify(arr3))

// []

arr4[0].location = "Glasgow";

console.log(arr3);
console.log(arr4);

// Both glasgow   +++
// Glasgow/London +++
