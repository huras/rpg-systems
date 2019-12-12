const Biomes = {
    UNKNOWN: '?',
    Grassland: '草原',
    Forest: '森林'
};

let Tile = class {
    constructor(){
        this.contents = [];
        this.biome = Biomes.UNKNOWN;
        this.flora = [];
    }

    setBiome(biome){
        this.biome = biome;
    }

    addContent(content){
        this.contents.push(content);
    }

    addFloraContent(content){
        this.flora.push(content);
    }
}

module.exports = {class: Tile, Biomes};