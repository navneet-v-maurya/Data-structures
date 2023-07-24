/*Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 The function should calculate the maximum sum of n consecutive elements in the array.*/

const myway = (arr, val) => {
  if (val > arr.length) return null;
  let first = 0;
  let second = val;

  let sum = -Infinity;
  while (second <= arr.length) {
    let temp = 0;
    for (let i = first; i < second; i++) {
      temp += arr[i];
    }

    if (temp > sum) sum = temp;
    first += 1;
    second += 1;
  }
  return sum;
};
console.log("my way");
console.log(myway([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(myway([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(myway([4, 2, 1, 6], 1)); // 6
console.log(myway([4, 2, 1, 6, 2], 4)); // 13
console.log(myway([], 4)); // null

const refractored = (arr, val) => {
  if (val > arr.length) return null;

  let sum = 0;
  for (let i = 0; i < val; i++) {
    sum += arr[i];
  }

  let temp = sum;
  for (let i = 0; i < arr.length; i++) {
    temp = temp + arr[val] - arr[i];
    if (temp > sum) sum = temp;
    val += 1;
  }
  return sum;
};

console.log("refractored version");
console.log(refractored([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(refractored([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(refractored([4, 2, 1, 6], 1)); // 6
console.log(refractored([4, 2, 1, 6, 2], 4)); // 13
console.log(refractored([], 4)); // null
