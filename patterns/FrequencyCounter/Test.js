/*Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
formed from iceman.*/

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let counter1 = {};
  let counter2 = {};

  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key in counter2)) return false;
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
