const InsertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = i + 1;
    let index = curr;
    for (let j = i; j >= 0; j--) {
      if (arr[curr] < arr[j]) {
        index = j;
      }
    }
    if (index !== curr) {
      let temp = arr[curr];
      arr[curr] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
};

console.log(InsertionSort([8, 2, 4, 5, 7, 9, 90, 7, 7, 7, 76, 6, 6, 78, 8, 9]));
