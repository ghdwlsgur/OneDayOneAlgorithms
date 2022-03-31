'use strict';

function countUniqueValues(arr) {
  const left = 0;
  let right = arr.length - 1;
  let count = 0;

  while (left <= right) {
    if (arr[left] === arr[right]) {
      arr.splice(left, right + 1);
      right = arr.length - 1;
      count++;
    } else if (arr[left] !== arr[right]) {
      right--;
      if (left === right) {
        arr.shift();
        right = arr.length - 1;
        count++;
      }
    }
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
