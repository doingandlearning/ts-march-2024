import assert from "node:assert";

function createBook(title: string, author = "Unknown", year = "Unknown"): Book {
  return {
    title,
    author,
    year,
  };
}

export function displayBookInfo(book: Book) {
  return `The book '${book.title}' by ${book.author} was published in ${book.year}.`;
}

export interface Book {
  title: string;
  author: string;
  year: string;
}

// Testing createBook function
const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", "1925");
assert.strictEqual(book1.title, "The Great Gatsby");
assert.strictEqual(book1.author, "F. Scott Fitzgerald");
assert.strictEqual(book1.year, "1925");

const book2 = createBook("1984");
assert.strictEqual(book2.title, "1984");
assert.strictEqual(book2.author, "Unknown");
assert.strictEqual(book2.year, "Unknown");

// Testing displayBookInfo function
const info1 = displayBookInfo(book1);
assert.strictEqual(
  info1,
  "The book 'The Great Gatsby' by F. Scott Fitzgerald was published in 1925."
);

const info2 = displayBookInfo(book2);
assert.strictEqual(
  info2,
  "The book '1984' by Unknown was published in Unknown."
);
