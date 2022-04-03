// const areThereDuplicates = (...arg) => {
//   const obj = {};
//   for (let i = 0; i < arg.length; i++) {
//     obj[arg[i]] = ++obj[arg[i]] || 1;
//   }

//   for (let key in obj) {
//     if (obj[key] > 1) return true;
//   }
//   return false;
// };

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));

const areThereDuplicatesUsingSet = (...arg) => {
  return new Set(arg).size !== arg.length;
};

console.log(areThereDuplicatesUsingSet(1, 2, 3));
console.log(areThereDuplicatesUsingSet(1, 2, 2));
console.log(areThereDuplicatesUsingSet('a', 'b', 'c', 'a'));
