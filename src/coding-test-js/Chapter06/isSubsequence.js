'use strict';

const isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

const isSubsequence2 = (str1, str2) => {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

const isSubsequence3 = (str1, str2) => {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
};

console.log(isSubsequence('', 'hello world'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb')); // order matters
