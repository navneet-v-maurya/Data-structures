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

/*Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. In the first
 example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.*/

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
console.log("*************");
console.log("fifth problem");
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

/*Write a function called minSubArrayLen which accepts two parameters - 
an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which
 the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.*/

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
console.log("*************");
console.log("sixth problem");
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

/*Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.*/

const findLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }
  return longest;
};
console.log("*************");
console.log("seventh problem");
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
