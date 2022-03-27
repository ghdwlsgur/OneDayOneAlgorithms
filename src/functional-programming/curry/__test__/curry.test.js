'use strict';

const curry = require('../curry');

describe('curry()', () => {
  it('returns a new function on subsequent calls', () => {
    const sum = (a, b) => a + b;

    const fn0 = curry(sum);
    const fn1 = fn0();
    const fn2 = fn1();
    const fn3 = fn2();

    const fnT = curry(sum);

    expect(fn3(10, 5)).toStrictEqual(15);
    expect(fnT(10, 5)).toStrictEqual(15);
  });

  it('handles more arguments than given arity', () => {
    const sumAll = curry(function (_a, _b) {
      const xs = Array.from(arguments);
      console.log('arguments' + JSON.stringify(arguments));
      console.log('xs' + xs);
      return xs.reduce((acc, curr) => acc + curr, 0);
    });

    const result = [
      sumAll()(40)(20),
      sumAll(20)(40),
      sumAll(30, 30),
      sumAll(10, 20, 30),
      sumAll(10)(20, 30),
      sumAll(10, 20, 30),
      sumAll(10)(20, 20, 10),
      sumAll(10)(10, 10, 10, 20),
    ];

    expect(result.every(x => x === 60)).toBe(true);
  });
});
