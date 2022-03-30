'use strict';

// const same = (array, arraySquare) => {
//   const getArray = [...getSquare(array).sort((a, b) => a - b)];
//   arraySquare.sort((a, b) => a - b);

//   let result = true;
//   if (getArray.length === arraySquare.length) {
//     for (let i = 0; i < getArray.length; i++) {
//       result = (getArray[i] == arraySquare[i] && true) || false;
//       if (!result) return false;
//     }
//     return result;
//   } else return false;
// };

// const getSquare = array => {
//   let result = [];
//   array.map((number, i) => {
//     result[i] = number ** 2;
//   });
//   return result;
// };

// console.log(same([3, 1, 3], [9, 1]));

const same = (array, arraySquare) => {
  arraySquare.sort((a, b) => a - b);
  array.sort((a, b) => a - b);

  let result = true;
  if (array.length === arraySquare.length) {
    for (let i = 0; i < array.length; i++) {
      result = (arraySquare[i] == array[i] ** 2 && true) || false;
      if (!result) return false;
    }
    return result;
  } else return false;
};

console.log(same([3, 1, 3], [9, 1, 9]));
