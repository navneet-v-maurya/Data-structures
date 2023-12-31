const SinglyLinkedListQueue = require("../3.Queues/Queue.js");

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

  addEdge(vertex1, vertex2) {
    if (!this.list[vertex1] || !this.list[vertex2]) return null;
    this.list[vertex1].push(vertex2);
    this.list[vertex2].push(vertex1);
    return this.list;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.list[vertex1] || !this.list[vertex2]) return null;

    for (let i = 0; i < this.list[vertex1].length; i++) {
      if (this.list[vertex1][i] === vertex2) {
        const temp = this.list[vertex1][i];
        this.list[vertex1][i] =
          this.list[vertex1][this.list[vertex1].length - 1];
        this.list[vertex1][this.list[vertex1].length - 1] = temp;
        this.list[vertex1].pop();
        break;
      }
    }

    for (let i = 0; i < this.list[vertex2].length; i++) {
      if (this.list[vertex2][i] === vertex1) {
        const temp = this.list[vertex2][i];
        this.list[vertex2][i] =
          this.list[vertex2][this.list[vertex2].length - 1];
        this.list[vertex2][this.list[vertex2].length - 1] = temp;
        this.list[vertex2].pop();
        break;
      }
    }

    return this.list;
  }

  removeVertex(vertex) {
    if (!this.list[vertex]) return null;
    for (let i = this.list[vertex].length; i >= 0; i--) {
      this.removeEdge(vertex, this.list[vertex][i]);
    }

    delete this.list[vertex];
    return this.list;
  }

  dfsRecurive(start) {
    const arr = [];
    const visted = {};
    const list = this.list;

    const dfs = (vertex) => {
      if (!list[vertex]) return null;
      visted[vertex] = true;
      arr.push(vertex);
      list[vertex].forEach((el) => {
        if (!visted[el]) {
          return dfs(el);
        }
      });
    };

    dfs(start);
    return arr;
  }

  dfsIterative(start) {
    if (!this.list[start]) return null;
    const stack = [start];
    const arr = [];
    const visited = {};
    while (stack.length > 0) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        arr.push(vertex);
        this.list[vertex].forEach((el) => {
          stack.push(el);
        });
      }
    }
    return arr;
  }

  bfs(start) {
    if (!this.list[start]) return null;
    const q = new SinglyLinkedListQueue();
    q.enqueue(start);
    const arr = [];
    const visited = {};

    while (q.size > 0) {
      const vertex = q.dequeue();
      if (!visited[vertex]) {
        visited[vertex] = true;
        arr.push(vertex);
        this.list[vertex].forEach((el) => {
          q.enqueue(el);
        });
      }
    }
    return arr;
  }
}

const grph = new Grpah();
console.log(grph.removeEdge("C", "A"));
console.log(grph.addEdge("B", "C"));
console.log(grph.addVertex("A"));
console.log(grph.addVertex("B"));
console.log(grph.addVertex("C"));
console.log(grph.addVertex("D"));
console.log(grph.addVertex("E"));
console.log(grph.addVertex("F"));
console.log(grph.addEdge("A", "B"));
console.log(grph.addEdge("A", "C"));
console.log(grph.addEdge("B", "D"));
console.log(grph.addEdge("C", "E"));
console.log(grph.addEdge("D", "E"));
console.log(grph.addEdge("D", "F"));
console.log(grph.addEdge("E", "F"));

console.log(grph.dfsRecurive("A"), "Recursive");
console.log(grph.dfsIterative("A"), "Iterative");
console.log(grph.bfs("A"), "BFS");
