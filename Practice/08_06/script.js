/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const historyBook = {
  name: "History Book",
  color: "brown",
  author: "Maya Beach",
  pages: 300,
  newPagesNum: function (pages) {
    console.log("Current number of pages:", this.pages);
    this.pages = pages;
    console.log("New number of pages after revision:", this.pages);
  },
};

console.log(historyBook.newPagesNum(432));

const financialBook = {
  name: "Financial Book",
  color: "multi",
  author: "Sophia James",
  pages: 230,
};
const addBook = function (newBook) {
  const addNewBook = document.createElement("article");
  addNewBook.innerHTML = `
      <h1>${newBook.name}</h1>
      <ul>
        <li>Color: ${newBook.color}</li>
        <li>Author: ${newBook.author}</li>
        <li>Number of pages: ${newBook.pages}</li>
      </ul>
    `;
  return addNewBook;
};

const theNewBook = addBook(financialBook);
console.log(theNewBook);
const main = document.querySelector("main");
main.append(addBook(financialBook));

((a = 5, b = 6) => {
  console.log("Do some math:", a * b);
})();
