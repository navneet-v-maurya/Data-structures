const QuickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    QuickSort(arr, start, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, end);
  }
  return arr;
};

const pivot = (arr, start, end) => {
  let pivotValue = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }
  let temp = arr[pivotIndex];
  arr[pivotIndex] = pivotValue;
  arr[start] = temp;
  return pivotIndex;
};

console.log(QuickSort([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]));
