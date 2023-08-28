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

  //method to remove element from head
  shift() {
    if (this.length === 0) return undefined;
    let currHead = this.head;
    if (this.length === 1) {
      this.tail = null;
    }
    this.head = currHead.next;
    this.length--;
    return currHead.val;
  }

  //method to add element to head
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currHead = this.head;
      newNode.next = currHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //method to get element with index
  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let curr = this.head;
    while (counter < this.length) {
      if (counter === index) {
        return curr;
      }
      counter++;
      curr = curr.next;
    }
  }

  //method to update element at a particular index
  set(index, val) {
    const found = this.get(index);
    if (found) {
      found.val = val;
      return true;
    }
    return false;
  }

  //insert a val at a given index
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    const found = this.get(index);
    const newNode = new Node(val);
    if (index === 0) {
      this.head = newNode;
      newNode.next = found;
      this.length++;
      return true;
    }

    const prevNode = this.get(index - 1);
    if (index === this.length) {
      prevNode.next = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }

    if (found) {
      newNode.next = found;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }

  // method to log each node of list
  traverse() {
    let myList = "";
    if (this.length === 0) return "null";
    let curr = this.head;
    while (curr) {
      myList += `${curr.val}->`;
      if (curr.val === this.tail.val) {
        myList += "null";
      }
      curr = curr.next;
    }
    return myList;
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
console.log("pop", list.pop());

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log("shift", list.shift());
console.log("shift", list.shift());
console.log(list.traverse());
list.unshift(2);
list.unshift(1);
console.log(list.traverse());
console.log(list.set(2, 5));
console.log(list.traverse());
console.log(list.set(6, 10));
console.log(list.traverse());
console.log(list.get(10));
console.log(list.insert(3, 6));
console.log(list.traverse());
