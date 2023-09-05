class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add element at end of list
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.tail;
      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  // method to log each node of list
  traverse() {
    if (this.length === 0) return "null";
    let myList = "null<-";
    let curr = this.head;
    while (curr) {
      myList += `${curr.val}<=>`;
      if (curr.val === this.tail.val) {
        myList += "null";
      }
      curr = curr.next;
    }
    return myList;
  }
}

const list = new DoublyLinkedList();

console.log(list.push(1));
console.log(list.traverse());
console.log(list.push(2));
console.log(list.traverse());
