function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(1000000000));

const before = new Date();
const t1 = before.getTime();
console.log(addUpTo(1000000000));
const after = new Date();
const t2 = after.getTime();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
