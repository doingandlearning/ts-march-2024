import assert from "node:assert";
import { Book } from "./part1";

class Author {
  public books: Book[];

  constructor(public name: string) {
    this.name = name;
    this.books = [];
  }

  addBook = (book: Book) => {
    this.books.push(book);
  };
}

function listAuthorsBooks(authors: Author[]) {
  let output = "";
  for (const author of authors) {
    for (const book of author.books) {
      output += `${author.name}: ${book.title}\n`;
    }
  }
  return output;
}

// Test the Author class and listAuthorsBooks function
const author1 = new Author("J.K. Rowling");
const book1: Book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  year: "1997",
};
author1.addBook(book1);

const author2 = new Author("George Orwell");
const book2: Book = { title: "1984", author: "George Orwell", year: "1949" };
author2.addBook(book2);

const authors = [author1, author2];
const output = listAuthorsBooks(authors);

// Assertions
assert.strictEqual(author1.books.length, 1);
assert.strictEqual(author2.books.length, 1);
assert.strictEqual(
  output,
  "J.K. Rowling: Harry Potter and the Philosopher's Stone\nGeorge Orwell: 1984\n"
);
