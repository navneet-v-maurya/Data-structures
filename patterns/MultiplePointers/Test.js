/*Implement a function called countUniqueValues, which accepts a sorted array,
 and counts the unique values in the array. There can be negative numbers in
  the array, but it will always be sorted.*/

const countUniqueValues = (arr) => {
  let counts = 0;

  let first = 0;
  let second = 1;
  while (second <= arr.length) {
    if (arr[first] !== arr[second]) {
      counts += 1;
    }
    first += 1;
    second += 1;
  }
  return counts;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
