'use strict';

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log(`middle: ${middle}`);
    console.log(`element: ${array[middle]}`);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) max = middle - 1;
    else return middle;
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 10, 20, 30, 44, 46, 49, 65, 87, 100], 100));
// console.log(search([1, 2, 3, 4, 5, 10, 20, 30, 44, 46, 49, 65, 87, 100], 44));

/**
 * ToDo: accustomed pattern
 *
 * Make it on my own !
 * 1. Get the gist of this algorithms.
 * 2. typing.
 *
 * ! devide and conquer
 */

function accomplishedPattern1(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) min = middle + 1;
    else if (currentElement > val) max = middle - 1;
    else return middle;
  }

  return -1;
}

function accomplishedPattern2(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) min = middle + 1;
    else if (currentElement > val) max = middle - 1;
    else return middle;
  }

  return -1;
}

function accomplishedPattern3(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) min = middle + 1;
    else if (currentElement > val) max = middle - 1;
    else return middle;
  }

  return -1;
}
