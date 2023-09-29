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
}

const heap = new MaxBinaryHeap();

console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
