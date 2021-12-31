/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";

const inventoryBook1 = new Book(
  "The new lands",
  "Arthur James",
  300,
  12.45,
  "hard",
  "December 5, 2018",
  "1234-7654-9876",
  12
);

console.log("The book object:", inventoryBook1);
console.log("The price:", inventoryBook1.price);
console.log("Days since published:", inventoryBook1.bookAge());

const inventoryBook2 = new Book(
  "The vast lands",
  "Thomas Newman",
  167,
  30,
  "hard",
  "December 23, 1955",
  "6667-8887-9998",
  1
);

console.log("The book object:", inventoryBook2);
console.log("The price:", inventoryBook2.price);
console.log("Days since published:", inventoryBook2.bookAge());

const inventoryBook3 = new Book(
  "The new co-worker",
  "Emma Alba",
  189,
  21.99,
  "soft",
  "September 7, 2005",
  "1776-8643-4589",
  2
);

console.log("The book object:", inventoryBook3);
console.log("The price:", inventoryBook3.price);
console.log("Days since published:", inventoryBook3.bookAge());

const inventoryBook4 = new Book(
  "Island escape",
  "Peter Livingsone",
  353,
  43.54,
  "soft",
  "August 5, 1944",
  "1333-6545-3434",
  3
);

console.log("The book object:", inventoryBook4);
console.log("The price:", inventoryBook4.price);
console.log("Days since published:", inventoryBook4.bookAge());

const inventoryBook5 = new Book(
  "The waterfall",
  "Silvia Presley",
  234,
  22.68,
  "hard",
  "February 5, 2011",
  "1776-4354-7654",
  1
);

console.log("The book object:", inventoryBook5);
console.log("The price:", inventoryBook5.price);
console.log("Days since published:", inventoryBook5.bookAge());
