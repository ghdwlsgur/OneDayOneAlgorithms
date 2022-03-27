function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const before = new Date();
const t1 = before.getTime();
console.log(addUpTo(1000000000));
const after = new Date();
const t2 = after.getTime();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(3);

function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(30);
