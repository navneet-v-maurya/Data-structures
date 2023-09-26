const SinglyLinkedListQueue = require("../3.Queues/Queue.js");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.frequency = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.root = newNode;
      this.size++;
      return this;
    }

    let curr = this.root;
    while (curr) {
      if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          this.size++;
          return this;
        }
        curr = curr.right;
      } else if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          this.size++;
          return this;
        }
        curr = curr.left;
      } else {
        curr.frequency++;
        return this;
      }
    }
  }

  find(val) {
    if (this.size === 0) return false;

    let curr = this.root;
    while (curr) {
      if (curr.val === val) return true;

      if (curr.val < val) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return false;
  }

  BFS_Using_Array() {
    const arr = [];
    const visited = [];
    let curr;
    if (this.root) {
      visited.push(this.root);
    }
    while (visited.length > 0) {
      curr = visited.shift();
      arr.push(curr.val);
      if (curr.left) {
        visited.push(curr.left);
      }
      if (curr.right) {
        visited.push(curr.right);
      }
    }
    return arr;
  }

  BFS_Using_Queue() {
    const arr = [];
    const visited = new SinglyLinkedListQueue();
    let curr;
    if (this.root) {
      visited.enqueue(this.root);
    }
    while (visited.size > 0) {
      curr = visited.dequeue();
      arr.push(curr.val);
      if (curr.left) {
        visited.enqueue(curr.left);
      }
      if (curr.right) {
        visited.enqueue(curr.right);
      }
    }
    return arr;
  }

  DFS_preorder_recursive() {
    const arr = [];
    if (this.size === 0) return arr;
    const helper = (node) => {
      arr.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };
    helper(this.root);
    return arr;
  }

  DFS_preorder_iterative() {
    const arr = [];
    if (!this.root) return arr;

    const stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      const node = stack.pop();
      arr.push(node.val);

      if (node.right) {
        stack.push(node.right);
      }

      if (node.left) {
        stack.push(node.left);
      }
    }

    return arr;
  }
}

const bst = new BinarySearchTree();

console.log(bst.DFS_preorder_iterative());
console.log(bst.BFS_Using_Array());
console.log(bst.BFS_Using_Queue());
//console.log(bst.find(10));
console.log(bst.insert(10));
//console.log(bst.find(6));
console.log(bst.insert(6));
console.log(bst.insert(15));
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst.insert(20));
//console.log(bst.find(5));
//console.log(bst.find(2));
//console.log(bst.find(7));
//console.log(bst.find(6));
//console.log(bst.find(3));
//console.log(bst.find(10));
console.log(bst.BFS_Using_Queue());
console.log(bst.DFS_preorder_recursive());
console.log(bst.DFS_preorder_iterative());
