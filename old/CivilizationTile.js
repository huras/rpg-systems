const Tree = require('./Tree');
const City = require('./City');

const Biomes = {
    UNKNOWN: '?',
    Plains: 'plains',
    Forest: '森林'
};

const Contents = {
    City: 'city'
}

const Tile = class {
    constructor(biome = Biomes.UNKNOWN, contents) {
        console.log(biome+' tile created');

        this.biome = biome;
        this.trees = [];
        this.soilHealth = 0;        

        this.GenerateBiome(this.biome);
        this.PlaceContents(contents);
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
    PlaceContents(contents){
        this.contents = [];
        contents.map(item => {
            switch (item) {
                case Contents.City:
                        this.contents.push(new City.City(City.Size.Village));
                    break;
            
                default:
                    break;
            }
        });
    }
}

const CivilizationTile = {
    Biomes: Biomes,
    Tile, Tile
}

module.exports = CivilizationTile;