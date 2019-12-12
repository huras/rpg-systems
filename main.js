const World = require("./World");
const Tile = require("./Tile");
const City = require("./City");
const Tree = require("./Tree");
let getSavedGame = () => {
  let world = new World.class();

  let tiles = [];
  let tile = new Tile.class();
  tiles.push(tile);
  tile.setBiome(Tile.Biomes.Grassland);

  let city = new City.class(City.Size.Village);
  tile.addContent(city);

  let tree = new Tree.class(0, 0);
  tile.addFloraContent(tree);

  let savedGame = {};
  savedGame.world = world;
  world.setTiles(tiles);

  console.log(world.tiles);

  return savedGame;
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let main = async () => {
  const savedGame = getSavedGame();

  let rounds = 0;
  while (1) {
    rounds++;
    console.log("running round " + rounds);
    savedGame.world.run();
    await sleep(1000);
  }
};

main();
