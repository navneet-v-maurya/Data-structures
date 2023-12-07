const PriorityQueue = require("../4.Trees/PriorityQueue");

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

  addEdge(vertex1, vertex2, weight) {
    if (!this.list[vertex1] || !this.list[vertex2]) return null;
    this.list[vertex1].push({ noe: vertex2, weight });
    this.list[vertex2].push({ node: vertex1, weight });
    return this.list;
  }
}
