'use strict';

function charCount(str) {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) result[char] = ++result[char] || 1;
  }
  return result;
}

function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  )
    return false;
  return true;
}

function charCount2(str) {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) result[char] = ++result[char] || 1;
  }
}

function charCount3(str) {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) result[char] = ++result[char] || 1;
  }
}

function charCount4(str) {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) result[char] = ++result[char] || 1;
  }
}

function charCount5(str) {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) result[char] = ++result[char] || 1;
  }
}

const charCount6 = str => {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) result[char] = ++result[char] || 1;
  }
};

console.log(charCount('heEEEllo!H'));

/**
 * ! Truthy & Falsy
 * TODO: if else를 논리 연산자를 사용하여 변환
 */

if (true) console.log('this is true 1');
if ({}) console.log('this is true 2');
if ([]) console.log('this is true 3');
if (42) console.log('this is true 4');
if ('0') console.log('this is true 5');
if ('false') console.log('this is true 6');
if (new Date()) console.log('this is true 7');
if (-42) console.log('this is true 8');
if (3.14) console.log('this is true 10');
if (-3.14) console.log('this is true 11');
if (Infinity) console.log('this is true 12');
if (-Infinity) console.log('this is true 13');

if (!false) console.log('this is false 1');
if (!null) console.log('this is false 2');
if (!undefined) console.log('this is false 3');
if (!0) console.log('this is false 4');
if (!-0) console.log('this is false 5');

const selfIntroduce = name => {
  const myName = name || '홍진혁';
  return myName + '입니다.';
};

console.log(selfIntroduce('강혜원'));
console.log(selfIntroduce());
