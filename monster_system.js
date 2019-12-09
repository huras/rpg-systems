const monsters = {
    UNKNOWN: 'unknown',
    SLIME: 'slime',
    GIANT_WOLF: 'Giant Wolf',
    GIANT_SPIDER: 'Giant Spider',
    GIANT_BAT: 'Giant Bat',
}

let Monster = class {

    constructor(type = monsters.UNKNOWN){
        this.type = type;
    }
}