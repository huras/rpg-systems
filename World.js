const Tile = require('./Tile');
const City = require('./City');
const Tree = require('./Tree');
let getSavedGame = () => {
    
    let savedGame = {tiles: []};

    let tile = new Tile.class();
    tile.setBiome(Tile.Biomes.Grassland);

    let city = new City.class(City.Size.Village);
    tile.addContent(city);

    let tree = new Tree.class(0,0);
    tile.addFloraContent(tree);

    console.log(tile);

    return savedGame;
}

let World = class {
    constructor(){        
        const savedGame = getSavedGame();
    }
}

let world = new World();
module.exports = world;