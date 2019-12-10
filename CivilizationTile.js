const Tree = require('./Tree');

const Biomes = {
    UNKNOWN: '?',
    Plains: 'plains',
    Forest: '森林'
}

const Tile = class {
    constructor(biome = Biomes.UNKNOWN) {
        console.log(biome+' tile created');

        this.biome = biome;
        this.trees = [];
        this.soilHealth = 0;

        this.GenerateBiome(this.biome);
    }

    GenerateBiome(biome){
        switch (biome) {
            case Biomes.Forest:
                    this.soilHealth = 3;
                    const treeCount = Math.random() * this.soilHealth;
                    for(let i = 0; i < treeCount; i++){
                        this.trees.push(new Tree(Math.random(), Math.random()));
                    }
                break;
        
            default:
                break;
        }
    }
}

const CivilizationTile = {
    Biomes: Biomes,
    Tile, Tile
}

module.exports = CivilizationTile;