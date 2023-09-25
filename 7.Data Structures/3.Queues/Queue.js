class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return temp.val;
    }
    let temp = this.head;
    this.head = temp.next;
    this.size--;
    return temp.val;
  }
}

module.exports = SinglyLinkedListQueue;

// const queue = new SinglyLinkedListQueue();

// console.log("dequeue", queue.dequeue());
// console.log(queue.enqueue(1));
// console.log("dequeue", queue.dequeue());
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));
// console.log(queue.enqueue(4));
// console.log(queue.enqueue(5));
// console.log("dequeue", queue.dequeue());
// console.log(queue);
