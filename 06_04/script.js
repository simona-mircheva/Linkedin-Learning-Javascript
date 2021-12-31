/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let titelColor = "blue";
  document.querySelector(".title").style.color = titelColor;
  console.log("inside: ", titelColor);
}

headingColor();
// console.log("outside: ", titelColor); // Shows green box as a result of error and stoped execution

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
