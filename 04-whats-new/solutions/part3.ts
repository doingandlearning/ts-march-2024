import assert from "node:assert";
import { Book, displayBookInfo } from "./part1";

function displayAllBooks(books: Book[]) {
  let output = "";
  for (const book of books) {
    output += displayBookInfo(book) + "\n";
  }
  return output;
}

// Test displayAllBooks
const books: Book[] = [
  { title: "1984", author: "George Orwell", year: "1949" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960" },
];

const allBooksOutput = displayAllBooks(books);
assert.strictEqual(
  allBooksOutput,
  "The book '1984' by George Orwell was published in 1949.\n" +
    "The book 'To Kill a Mockingbird' by Harper Lee was published in 1960.\n"
);

// Test logging of libraryStats
let libraryStats = {
  "Alice Smith": 5,
  "John Doe": 3,
  "Emily Johnson": 8,
  "Mark Williams": 4,
  "Sarah Brown": 6,
};

let capturedLog = "";
const originalConsoleLog = console.log;
console.log = (message: string) => {
  capturedLog += message + "\n";
};

for (const [author, bookCount] of Object.entries(libraryStats)) {
  console.log(`${author} has written ${bookCount} books.`);
}

console.log = originalConsoleLog; // Restore the original console.log

assert.strictEqual(
  capturedLog,
  "Alice Smith has written 5 books.\n" +
    "John Doe has written 3 books.\n" +
    "Emily Johnson has written 8 books.\n" +
    "Mark Williams has written 4 books.\n" +
    "Sarah Brown has written 6 books.\n"
);
