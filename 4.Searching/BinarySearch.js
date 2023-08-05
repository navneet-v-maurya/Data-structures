const BinarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let index = Math.floor((left + right) / 2);
    if (arr[index] === val) return index;
    if (arr[index] > val) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
  return -1;
};

console.log(BinarySearch([1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16], 17));
