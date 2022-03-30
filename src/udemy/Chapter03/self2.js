'use strict';

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let prequencyCounter1 = {};
  let prequencyCounter2 = {};

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    prequencyCounter1[str1.slice(i, i + 1)] =
      (prequencyCounter1[str1.slice(i, i + 1)] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    prequencyCounter2[str2.slice(i, i + 1)] =
      (prequencyCounter2[str2.slice(i, i + 1)] || 0) + 1;
  }

  for (let key of Object.keys(prequencyCounter1)) {
    if (!prequencyCounter2.hasOwnProperty(key)) return false;
    if (prequencyCounter1[key] !== prequencyCounter2[key]) return false;
  }

  return true;
}

const date1 = new Date().getTime();
console.log(validAnagram('test', 'ttse'));
const date2 = new Date().getTime();

console.log(date2 - date1);
