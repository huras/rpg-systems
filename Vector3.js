let Vector3 = class {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  translate(vector3) {
    this.x += vector3.x;
    this.z += vector3.z;
  }
};

module.exports = { class: Vector3 };
