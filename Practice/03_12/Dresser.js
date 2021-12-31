/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Dresser {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    material,
    drawersNum,
    xAx,
    yAx,
    zAx,
    drawerOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.material = material;
    this.drawersNum = drawersNum;
    this.clothsBoxDimensions = {
      xDimension: xAx,
      yDimension: yAx,
      zDimension: zAx,
    };
    this.drawerOpen = drawerOpen;
  }
  // Add methods like normal functions:
  toggleDrawer(drawerStatus) {
    this.drawerOpen = drawerStatus;
  }
  newBoxDimesions(xBox, yBox, zBox) {
    this.clothsBoxDimensions.xDimension = xBox;
    this.clothsBoxDimensions.yDimension = yBox;
    this.clothsBoxDimensions.zDimension = zBox;
  }
}

export default Dresser;
