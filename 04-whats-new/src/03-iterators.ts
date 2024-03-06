const olympians = [
  "Michael Phelps",
  "Usain Bolt",
  "Simone Biles",
  "Serena Williams",
  "Katie Ledecky",
];

// how do i console.log them individually?

for (let i = 0; i < olympians.length; i++) {
  console.log(olympians[i]);
}

olympians.forEach((olympian) => console.log(olympian));

for (const olympian of olympians) {
  // for ... of
  console.log(olympian);
}

const olympianGenerator = olympians[Symbol.iterator]();
console.log(olympianGenerator.next());
console.log(olympianGenerator.next());
console.log(olympianGenerator.next());
console.log(olympianGenerator.next());
console.log(olympianGenerator.next());
console.log(olympianGenerator.next());

const medallists = {
  "Michael Phelps": 28,
  "Usain Bolt": 8,
  "Simone Biles": 7,
  "Serena Williams": 4,
  "Katie Ledecky": 6,
};

console.log(...Object.entries(medallists));
// console.log(...medallists);

for (const [olympian, medals] of Object.entries(medallists)) {
  console.log(`${olympian} has won ${medals} medals.`);
}

for (let key of Object.keys(medallists)) {
  console.log(key);
  console.log(medallists[key]);
}
