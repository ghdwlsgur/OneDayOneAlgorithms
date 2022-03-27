'use strict';
// Currying
// named after Haskell B. Curry
// Concept from lambda calculus

// Currying takes a function that receives more than one parameter
// and breaks it into a series of unary (one parameter) functions

// Therefore, a curried function only takes one paramter at a time

const buildSandwich = ingredient1 => {
  return ingredient2 => {
    return ingredient3 => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato');
console.log(mySandwich);

// It works but thats getting ugly and nested the further we go
// Let's refactor

const buildSammy = ingred1 => ingred2 => ingred3 =>
  `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy('turkey')('cheese')('bread');
console.log(mySammy);

const multiply = (x, y) => x * y;

const curriedMultiply = x => y => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

// Another common use of currying is function composition
// Allows calling small functions in a specific order

const addCustomer =
  fn =>
  (...args) => {
    console.log('sacing customer info...');
    return fn(...args);
  };

const processOrder =
  fn =>
  (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
  };

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`);
};

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder('1000');

/*
function addCustomer(...args) {
  return function processOrder(...args) {
    return function completeOrder(...args) {
      //end
    }
  }
}
*/

// Requires a function with a fixed number of parameters
const curry = fn => {
  let curried;
  console.log('fn.length = ' + fn.length);
  return (curried = (...args) => {
    console.log('arguments input = ' + args.length);
    if (fn.length !== args.length) {
      return curried.bind(null, ...args); // bind creates new func
    }
    return fn(...args);
  });
};

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
