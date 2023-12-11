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
    this.list[vertex1].push({ node: vertex2, weight });
    this.list[vertex2].push({ node: vertex1, weight });
    return this.list;
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let vertex in this.list) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.list[smallest]) {
          let nextNode = this.list[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new Grpah();

console.log(graph.addVertex("A"));
console.log(graph.addVertex("B"));
console.log(graph.addVertex("C"));
console.log(graph.addVertex("D"));
console.log(graph.addVertex("E"));
console.log(graph.addVertex("F"));
console.log(graph.addEdge("A", "B", 2));
console.log(graph.addEdge("A", "C", 4));
console.log(graph.addEdge("A", "D", 7));
console.log(graph.addEdge("A", "F", 3));
console.log(graph.addEdge("C", "E", 5));
console.log(graph.addEdge("B", "E", 1));

console.log(graph.Dijkstra("A", "E"));
