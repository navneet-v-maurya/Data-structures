// Linear Search
const linear_search = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return true;
  }
  return false;
};

console.log(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 10));
console.log(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0));

//Binary Search
const binary_search = (arr, el) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === el) {
      return true;
    } else if (arr[mid] < el) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
