'use strict';

const averagePair = (array, arrayOfAverage) => {
  if (array.length < 1) return false;

  let sum = 0;
  array.filter(number => (sum += number));

  console.log(sum / array.length);
};

averagePair([1, 2, 3], 2.5);
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 2.5);
averagePair([-1, 0, 3, 4, 5, 6], 2.5);
