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

console.log("First problem");
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

/*Implement a function called, areThereDuplicates which accepts a variable number 
of arguments, and checks whether there are any duplicates among the arguments passed in.
  You can solve this using the frequency counter pattern OR the multiple pointers pattern.*/

const areThereDuplicates = (...args) => {
  const obj = {};
  for (let i = 0; i < args.length; i++) {
    if (obj[args[i]]) return true;
    obj[args[i]] = 1;
  }

  return false;
};
console.log("*************");
console.log("second problem");
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "b", "c")); // true

/*Write a function called averagePair. Given a sorted array of integers and a target average,
 determine if there is a pair of values in the array where the average of the pair equals the
  target average. There may be more than one pair that matches the average target.*/

const averagePair = (arr, avg) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if ((arr[start] + arr[end]) / 2 === avg) return true;
    if ((arr[start] + arr[end]) / 2 > avg) {
      end -= 1;
    } else {
      start += 1;
    }
  }
  return false;
};

console.log("*************");
console.log("third problem");
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

/*Write a function called isSubsequence which takes in two strings and checks whether the
 characters in the first string form a subsequence of the characters in the second string.
  In other words, the function should check whether the characters in the first string 
  appear somewhere in the second string, without their order changing.*/

const isSubsequence = (str1, str2) => {
  let s1 = 0;
  let s2 = 0;
  while (s2 < str2.length) {
    if (str1[s1] !== str2[s2]) {
      s2 += 1;
    } else {
      s1 += 1;
      s2 += 1;
    }
    if (s1 === str1.length) return true;
  }
  return false;
};

console.log("*************");
console.log("fourth problem");
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
