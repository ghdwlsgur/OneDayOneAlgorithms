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

const isSubsequence4 = (str1, str2) => {
  console.log(str1);
  console.log(str2);
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence4(str1.slice(1), str2.slice(1));
  return isSubsequence4(str1, str2.slice(1));
};

const isSubsequence5 = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence5(str1.slice(1), str1.slice(1));
  return isSubsequence5(str1, str2.slice(1));
};

console.log(isSubsequence4('hello', 'hello world'));
console.log(isSubsequence4('sing', 'string'));
console.log(isSubsequence4('abc', 'abracadabra'));
console.log(isSubsequence4('abc', 'acb')); // order matters
