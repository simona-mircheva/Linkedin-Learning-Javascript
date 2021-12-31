/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const dresser = {
  name: "Dresser",
  volume: 300,
  color: "brown",
  material: "wood",
  drawersNum: 10,
  clothsBoxDimensions: {
    x: 26,
    y: 26,
    z: 10,
  },
  drawerOpen: false,
  toggleDrawer: function (drawerStatus) {
    this.drawerOpen = drawerStatus;
  },
  newBoxDimensions: function (xBox, yBox, zBox) {
    this.clothsBoxDimensions.x = xBox;
    this.clothsBoxDimensions.y = yBox;
    this.clothsBoxDimensions.z = zBox;
  },
};

console.log("The dresser object:", dresser);
console.log("The dresser volume: ", dresser.volume);
console.log("X dimension: ", dresser.clothsBoxDimensions.x);

var query = ["material"];
console.log("The dresser material is: ", dresser[query]);
