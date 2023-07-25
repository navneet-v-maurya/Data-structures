/*Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)*/

const sameFrequency = (num1, num2) => {
  const s1 = num1.toString();
  const s2 = num2.toString();
  if (s1.length !== s2.length) return false;

  let frequency1 = {};
  let frequency2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (frequency1[s1[i]]) {
      frequency1[s1[i]] += 1;
    } else {
      frequency1[s1[i]] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (frequency2[s2[i]]) {
      frequency2[s2[i]] += 1;
    } else {
      frequency2[s2[i]] = 1;
    }
  }

  for (let key in frequency1) {
    if (!frequency2[key]) return false;
    if (frequency1.key !== frequency2.key) return false;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
