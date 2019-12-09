const items = {
    UNKNOWN: 'unknown',
    HEALTH_POTION: 'health_potion',
    COPPER_COIN: 'copper_coin'
}

let Item = class{    

    constructor(type = items.UNKNOWN){
        this.type = type;
    }
}