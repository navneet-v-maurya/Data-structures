const bubbleSort = (arr) => {
  let swaps;
  for (let i = arr.length; i >= 0; i--) {
    swaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swaps = false;
      }
    }
    if (swaps) break;
  }
  return arr;
};

console.log(bubbleSort([8, 2, 4, 5, 7, 9, 90, 7, 7, 7, 76, 6, 6, 78, 8, 9]));
