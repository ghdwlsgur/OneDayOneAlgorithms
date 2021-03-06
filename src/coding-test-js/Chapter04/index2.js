'use strict';

function countiUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countiUniqueValues([1, 2, 2, 5, 7, 7, 99]));
