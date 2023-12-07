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

  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swap = null;

      if (leftIndex < this.values.length) {
        if (this.values[leftIndex].priority < this.values[index].priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < this.values.length) {
        if (
          (swap === null &&
            this.values[rightIndex].priority < this.values[index].priority) ||
          (swap !== null &&
            this.values[rightIndex].priority < this.values[leftIndex].priority)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;

      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
    }

    return min;
  }
}

module.exports = PriorityQueue;

const pq = new PriorityQueue();

console.log(pq.dequeue());
console.log(pq.enqueue("sick", 3));
console.log(pq.dequeue());
console.log(pq.enqueue("just fever", 4));
console.log(pq.enqueue("sverer injury", 2));
console.log(pq.enqueue("heartattack", 1));
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
