'use strict';

const sameFrequency = (num1, num2) => {
  const num1OfDegit = num1.toString().split('');
  const num2OfDegit = num2.toString().split('');
  return num1OfDegit.length === num2OfDegit.length ? true : false;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 222));
