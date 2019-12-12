let Size = {
  Village: "村",
  Town: "町"
};

let City = class {
  constructor() {
    this.houses = [];
    // console.log(size+' created');
  }

  setHouses(houses) {
    this.houses = houses;
  }

  run() {
    this.houses.map(item => {
      item.run();
    });
  }
};

module.exports = { class: City, Size };
