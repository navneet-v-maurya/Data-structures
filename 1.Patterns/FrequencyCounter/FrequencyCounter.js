/*Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second
 array. The frequency of values must be the same.*/

const myway = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const sq = arr1[i] * arr1[i];
    const found = arr2.indexOf(sq);
    if (found === -1) return false;
    arr2.splice(found, 1);
  }
  return true;
};
console.log("my way");
console.log(myway([1, 2, 3], [4, 1, 9])); // true
console.log(myway([1, 2, 3], [1, 9])); // false
console.log(myway([1, 2, 1], [4, 4, 1])); // false

const refractored = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key * key in counter2)) return false;
    if (counter1[key] !== counter2[key * key]) return false;
  }

  return true;
};
console.log("Refractored way");
console.log(refractored([1, 2, 3, 3], [4, 1, 9, 9])); // true
console.log(refractored([1, 2, 3], [4, 1, 9])); // true
console.log(refractored([1, 2, 3], [1, 9])); // false
