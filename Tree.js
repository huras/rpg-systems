const Tree = class {
  constructor(x, z) {
    this.x = x;
    this.z = z;
    // console.log('new 木 created at '+x+','+z);
  }

  run() {
    console.log("A arvore balançou");
  }
};

module.exports = { class: Tree };
