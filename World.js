const Map = require('./Map');

let World = class {
    constructor(){
        console.log('世界 started');

        this.map = new Map();
    }
}

let world = new World();
module.exports = world;