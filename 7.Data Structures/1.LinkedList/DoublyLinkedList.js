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

  //remove elment from tail
  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    const temp = this.tail;
    const prev = this.tail.prev;
    prev.next = null;
    this.tail = prev;
    this.length--;
    return temp;
  }

  // method to log each node of list
  traverse() {
    if (this.length === 0) return " null ";
    let myList = " null <---> ";
    let curr = this.head;
    let counter = 0;
    while (counter <= this.length) {
      if (counter === this.length) {
        myList += " null ";
      } else {
        myList += ` (${curr.val}) <---> `;
        curr = curr.next;
      }
      counter++;
    }
    return myList;
  }
}

const list = new DoublyLinkedList();

console.log(list.traverse());
console.log(list.pop());
console.log(list.push(1));
console.log(list.traverse());
console.log(list.pop());
console.log(list.traverse());
console.log(list.push(2));
console.log(list.push(3));
console.log(list.push(3));
console.log(list.pop());
console.log(list.traverse(), list.length);
console.log(list);
