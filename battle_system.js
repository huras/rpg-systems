const Unit = require('./unit_system');

let Battle = class {
    constructor(){
        
    }

    Attack(target, damage, attacker){
        target.hp -= damage;
    }
}