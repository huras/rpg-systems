let Size = {
    Village: '村',
    Town: '町'
}

let City = class {
    constructor(size){
        this.size = size;
        console.log(size+' created');
    }
}

module.exports = {City, Size};