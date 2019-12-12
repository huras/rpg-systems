const Vector3 = require("./Vector3");

let Directions = {
  north: "北",
  south: "南",
  east: "東",
  west: "西"
};

let Transform = class {
  constructor() {
    this.position = new Vector3.class();
  }

  translateByDirection(direction) {
    switch (direction) {
      case Directions.north:
        this.position.z++;
        break;
      case Directions.south:
        this.position.z--;
        break;
      case Directions.east:
        this.position.x++;
        break;
      case Directions.west:
        this.position.x--;
        break;

      default:
        break;
    }
  }
};

module.exports = { class: Transform, Directions };
