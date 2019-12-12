const World = require("./World");
const Tile = require("./Tile");
const City = require("./City");
const Tree = require("./Tree");
const House = require("./House");
const Unit = require("./Unit");

let getSavedGame = () => {
  let world = new World.class();

  let tiles = [];
  let tile = new Tile.class();
  tiles.push(tile);
  tile.setBiome(Tile.Biomes.Grassland);

  let village = new City.class();
  let house1 = new House.class();
  let house2 = new House.class();
  let house3 = new House.class();
  let houses = [house1, house2, house3];
  village.setHouses(houses);
  tile.addContent(village);

  let tree = new Tree.class(0, 0);
  tile.addFloraContent(tree);

  let Mirela = new Unit.class("Mirela");
  tile.addContent(Mirela);

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
    // console.log("running round " + rounds);
    savedGame.world.run();
    await sleep(1000);
  }
};

main();
