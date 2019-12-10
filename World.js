const Map = require('./Map');

let getSavedGame = () => {
    
    let savedGame = {};

    return savedGame;
}

let World = class {
    constructor(){
        console.log('世界 started');



        this.map = new Map();
    }
}

let world = new World();
module.exports = world;