const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i === arr1.length) {
      result.push(arr2[j]);
      j++;
    } else if (j === arr2.length) {
      result.push(arr1[i]);
      i++;
    } else {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else if (arr2[j] < arr1[i]) {
        result.push(arr2[j]);
        j++;
      }
    }
  }
  return result;
};

const mergerSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergerSort(arr.slice(0, mid));
  let right = mergerSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergerSort([8, 2, 4, 5, 7, 9, 90, 7, 7, 7, 76, 6, 6, 78, 8, 9]));
