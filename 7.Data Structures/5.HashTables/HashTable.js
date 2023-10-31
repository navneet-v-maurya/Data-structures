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

  keys() {
    const keys = [];
    for (let i = 0; i < this.keymap.length; i++) {
      const temp = this.keymap[i];
      if (!temp) continue;
      for (let j = 0; j < temp.length; j++) {
        const temp_pair = temp[j];
        keys.push(temp_pair[0]);
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keymap.length; i++) {
      const temp = this.keymap[i];
      if (!temp) continue;
      for (let j = 0; j < temp.length; j++) {
        const temp_pair = temp[j];
        values.push(temp_pair[1]);
      }
    }
    return values;
  }
}

const ht = new HashTable();
console.log(ht.keys());
console.log(ht.get("hii"));
console.log(ht.set("cats", "are fine"));
console.log(ht.keys());
console.log(ht.set("hii", "bye"));
console.log(ht.set("hello", "bye"));

console.log(ht.get("hoo"));
console.log(ht.get("hello"));
console.log(ht.get("hii"));

console.log(ht.keymap.length);
console.log(ht.keys());
console.log(ht.values());
