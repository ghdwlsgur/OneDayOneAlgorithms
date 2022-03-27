'use strict';

const R = require('ramda');

const greet = R.replace('{name}', R.__, 'Hello, {name}!');
console.log(greet('Alice'));

console.log(R.add(2, 3));
console.log(R.add(7)(10));

const mapIndexed = R.addIndex(R.map);
console.log(
  mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']),
);
