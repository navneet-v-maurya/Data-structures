const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  return arr;
};

console.log(InsertionSort([8, 2, 4, 5, 7, 9, 90, 7, 7, 7, 76, 6, 6, 78, 8, 9]));
