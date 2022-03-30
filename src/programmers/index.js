// function solution({ a = [], b = [] } = {}) {
//   let total = 0;

//   for (let i = 0; i < a.length; i++) {
//     total += a[i] * b[i];
//   }
//   return total;
// }

// const a = [1, 2, 3, 4];
// const b = [-3, -1, 0, 2];
// console.log(solution({ a, b }));

// function solution(absolutes, signs) {
//   let result = 0;
//   absolutes.map((number, i) => {
//     result += getAbsolute(number, signs[i]);
//   });
//   return result;
// }
// const getAbsolute = (number, boolean) => {
//   return (boolean && number) || -number;
// };
// const absolutes = [4, 7, 12];
// const signs = [true, false, true];
// solution(absolutes, signs);

function solution(numbers) {
  const lessThanNineTotal = 45;
  let total = 0;
  numbers.map(number => {
    // let total = 0;
    total += number;
  });
  return lessThanNineTotal - total;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
// solution([5, 8, 4, 0, 6, 7, 9]);
