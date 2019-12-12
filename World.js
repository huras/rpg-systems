let World = class {
  constructor() {
    this.tiles = [];
  }

  setTiles(tiles) {
    this.tiles = tiles;
  }

  run() {
    this.tiles.map(item => {
      item.run();
    });
  }
};

module.exports = { class: World };
