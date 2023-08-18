class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //method to add element to the tail
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0 && !this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  //method to remove element from the tail
  pop() {
    if (this.head === null && this.length === 0) return undefined;

    let curr = this.head;
    let newTail = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return curr.val;
    }

    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    return curr.val;
  }

  // method to log each node of list
  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.traverse());

console.log("pop", list.pop());
console.log("pop", list.pop());
console.log("pop", list.pop());
console.log("pop", list.pop());
list.push(1);
list.push(2);
console.log(list.traverse());
