/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

stuffItems.forEach((item) => {
  stuffList.append(item);
});

console.log("stuff:", stuff);
console.log("stuffItems:", stuffItems);
article.append(stuffList);
