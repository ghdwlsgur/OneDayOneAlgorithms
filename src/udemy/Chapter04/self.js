'use strict';

// function sumZero(array) {
//   array.sort((a, b) => a - b);

//   let total = 0;
//   array.map(number => {
//     total += number;
//   });

//   return total !== 0 ? undefined : [array.shift(), array.pop()];
// }

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-2, 0, 1, 3]));

function sumZero(array) {
  let left = 0;
  let right = array.length - 1;

  let total = 1;
  while (left < right) {
    total = array[left] + array[right];
    if (!total) return [array[left], array[right]];
    else if (left === right) return undefined;
    left++;
    right--;
  }
}
