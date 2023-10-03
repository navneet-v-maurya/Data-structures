class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    while (parentIndex >= 0) {
      const child = this.values[childIndex];
      const parent = this.values[parentIndex];
      if (child.priority >= parent.priority) break;

      this.values[childIndex] = parent;
      this.values[parentIndex] = child;

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.values;
  }
}

const pq = new PriorityQueue();

console.log(pq.enqueue("sick", 3));
console.log(pq.enqueue("just fever", 4));
console.log(pq.enqueue("sverer injury", 2));
console.log(pq.enqueue("heartattack", 1));
