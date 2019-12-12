let Utils = class {
  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min + 1)) + min;
  }
};

module.exports = Utils;
