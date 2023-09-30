class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let valIndex = this.values.length - 1;
    let parentIndex = Math.floor((valIndex - 1) / 2);
    while (parentIndex >= 0) {
      if (val <= this.values[parentIndex]) break;
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[valIndex];
      this.values[valIndex] = temp;
      valIndex = parentIndex;
      parentIndex = Math.floor((valIndex - 1) / 2);
    }
    return this.values;
  }

  remove() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;
    let val = this.values.pop();

    let parent = 0;
    let leftChild = 2 * parent + 1;
    let rightChild = 2 * parent + 2;
    while (
      leftChild <= this.values.length &&
      rightChild <= this.values.length
    ) {
      if (
        this.values[leftChild] > this.values[parent] &&
        this.values[rightChild] > this.values[parent]
      ) {
        if (this.values[leftChild] > this.values[rightChild]) {
          let temp = this.values[leftChild];
          this.values[leftChild] = this.values[parent];
          this.values[parent] = temp;
          parent = leftChild;
          leftChild = 2 * parent + 1;
        } else {
          let temp = this.values[rightChild];
          this.values[rightChild] = this.values[parent];
          this.values[parent] = temp;
          parent = rightChild;
          rightChild = 2 * parent + 2;
        }
      } else if (this.values[leftChild] > this.values[parent]) {
        let temp = this.values[leftChild];
        this.values[leftChild] = this.values[parent];
        this.values[parent] = temp;
        parent = leftChild;
        leftChild = 2 * parent + 1;
      } else if (this.values[rightChild] > this.values[parent]) {
        let temp = this.values[rightChild];
        this.values[rightChild] = this.values[parent];
        this.values[parent] = temp;
        parent = rightChild;
        rightChild = 2 * parent + 2;
      } else {
        break;
      }
    }

    return val;
  }
}

const heap = new MaxBinaryHeap();

console.log(heap.remove());
console.log(heap.values);
console.log(heap.insert(41));
console.log(heap.remove());
console.log(heap.values);
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
console.log(heap.remove());
console.log(heap.values);
