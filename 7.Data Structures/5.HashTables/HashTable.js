class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keymap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    const found = this.keymap[index];
    const pair_arr = [key, value];
    if (!found) {
      this.keymap[index] = [];
    }
    this.keymap[index].push(pair_arr);
    return this.keymap;
  }

  get(key) {
    const index = this.hash(key);
    const found = this.keymap[index];
    if (!found) return null;

    for (let i = 0; i < found.length; i++) {
      const pair_arr = found[i];
      if (pair_arr[0] === key) {
        return pair_arr;
      }
    }
    return null;
  }
}

const ht = new HashTable();

console.log(ht.get("hii"));
console.log(ht.set("cats", "are fine"));
console.log(ht.set("hii", "bye"));
console.log(ht.set("hello", "bye"));

console.log(ht.get("hoo"));
console.log(ht.get("hello"));
console.log(ht.get("hii"));
