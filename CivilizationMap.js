const CivilizationTile = require('./CivilizationTile');

const CivilizationMap = class {
    constructor(width = 2, height = 2){
        this.map = [];

        for(let x = 0 ; x < width; x++){
            let newLine = [];
            for(let z = 0 ; z < width; z++){
                newLine.push(new CivilizationTile.Tile(CivilizationTile.Biomes.Forest));
            }
            this.map.push(newLine);
        }
    }
}

module.exports = CivilizationMap;