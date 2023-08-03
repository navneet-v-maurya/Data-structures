/*Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. Return an 
array that includes both values that sum to zero or undefined if a pair does not exist*/

const myway = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (num + arr[j] === 0) return [num, arr[j]];
    }
  }
  return undefined;
};

console.log("my way");
console.log(myway([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(myway([-2, 0, 1, 3])); // undefined
console.log(myway([1, 2, 3])); // undefined

const refractored = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] > arr[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
};

console.log("refractored");
console.log(refractored([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(refractored([-2, 0, 1, 2, 4])); //[ -2, 2 ]
console.log(refractored([1, 2, 3])); // undefined
