const arr = [1, 2, 5, 96, 55, 6, 4, 50, 8, 20, 80];

const LinearSearch = (num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
};

console.log(LinearSearch(40));
console.log(LinearSearch(80));
