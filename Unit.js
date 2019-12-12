const Transform = require("./Transform");
const Utils = require("./Utils");

let Unit = class {
  constructor(name) {
    this.transform = new Transform.class();
    this.name = name;
  }

  run() {
    this.walk();
    // console.log("Unit moved to " + this.transform.position);
  }

  walk() {
    let rand = Utils.getRandomIntInclusive(1, 7);
    let dir = null;

    switch (rand) {
      case 1:
        this.transform.translateByDirection(Transform.Directions.north);
        dir = Transform.Directions.north;
        break;
      case 2:
        this.transform.translateByDirection(Transform.Directions.south);
        dir = Transform.Directions.south;
        break;
      case 3:
        this.transform.translateByDirection(Transform.Directions.east);
        dir = Transform.Directions.east;
        break;
      case 4:
        this.transform.translateByDirection(Transform.Directions.west);
        dir = Transform.Directions.west;
        break;
    }

    if (dir) {
      console.log(this.name + " walked " + dir);
    } else {
      console.log(this.name + " did not move ");
    }
  }
};

module.exports = { class: Unit };
