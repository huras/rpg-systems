const CivilizationMap = require('./CivilizationMap');

let Map = class {
    constructor(){
        console.log('地図 created');

        this.civilizationMap = new CivilizationMap(1,1);
    }
}

module.exports = Map;