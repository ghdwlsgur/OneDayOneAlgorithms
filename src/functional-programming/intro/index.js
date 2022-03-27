'use strict';

function add(a, b) {
  return a + b;
}

let f1 = function (a) {
  return a * a;
};

let f2 = add;

function f3(f) {
  return f(20);
}

console.log(
  f3(function (x) {
    return x;
  }),
);

console.log(
  f3(function () {
    return 20;
  }),
);

function add_maker(a) {
  return function (b) {
    return a + b;
  };
}

let add10 = add_maker(10);
console.log(add10(20));

let add5 = add_maker(5);
let add15 = add_maker(20);

console.log(add5(10));
console.log(add15(10));

function f4(f1, f2, f3) {
  return f3(f1() * f2());
}

console.log(
  f4(
    function () {
      return 2;
    },
    function () {
      return 1;
    },
    function (a) {
      return a * a;
    },
  ),
);
