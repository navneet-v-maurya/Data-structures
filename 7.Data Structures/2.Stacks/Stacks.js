class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedListStack {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.start = newNode;
      this.end = newNode;
    } else {
      const temp = this.start;
      this.start = newNode;
      newNode.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      const temp = this.start;
      this.start = null;
      this.end = null;
      this.size--;
      return temp.val;
    }
    const temp = this.start;
    this.start = temp.next;
    this.size--;
    return temp.val;
  }
}

const stack = new SinglyLinkedListStack();

console.log("pop", stack.pop());
console.log(stack.push(1));
console.log("pop", stack.pop());
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log("pop", stack.pop());
console.log(stack);
