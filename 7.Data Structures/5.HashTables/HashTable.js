class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size);
  }

  hash(key) {}
}

const ht = new HashTable();

console.log(ht.keymap.length);
