const Transform = require("./Transform");
const Utils = require("./Utils");

let Unit = class {
  constructor() {
    this.transform = new Transform.class();
  }

  run() {
    this.walk();
    // console.log("Unit moved to " + this.transform.position);
  }

  walk() {
    let rand = Utils.getRandomIntInclusive(1, 4);

    switch (rand) {
      case 1:
        this.transform.translateByDirection(Transform.Directions.north);
        break;
      case 2:
        this.transform.translateByDirection(Transform.Directions.south);
        break;
      case 3:
        this.transform.translateByDirection(Transform.Directions.east);
        break;
      case 4:
        this.transform.translateByDirection(Transform.Directions.west);
        break;
    }
  }
};

module.exports = { class: Unit };
