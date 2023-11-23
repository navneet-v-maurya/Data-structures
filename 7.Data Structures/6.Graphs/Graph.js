class Grpah {
  constructor() {
    this.list = {};
  }

  addVertex(node) {
    if (!this.list[node]) {
      this.list[node] = [];
    }
    return this.list;
  }
}

const grph = new Grpah();
console.log(grph.addVertex("A"));
console.log(grph.addVertex("B"));
console.log(grph.addVertex("A"));
