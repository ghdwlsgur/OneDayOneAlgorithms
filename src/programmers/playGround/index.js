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

// function solution(numbers) {
//   const lessThanNineTotal = 45;
//   let total = 0;
//   numbers.map(number => {
// let total = 0;
//     total += number;
//   });
//   return lessThanNineTotal - total;
// }

// solution([1, 2, 3, 4, 6, 7, 8, 0]);
// solution([5, 8, 4, 0, 6, 7, 9]);

// function solution(participant, completion) {
//   const startList = {};
//   for (let i = 0; i < participant.length; i++) {
//     startList[participant[i]] = ++startList[participant[i]] || 1;
//   }

//   const endList = {};
//   for (let i = 0; i < completion.length; i++) {
//     endList[completion[i]] = ++endList[completion[i]] || 1;
//   }

//   for (let name in startList) {
//     endList[name] ? startList[name]-- : '';
//   }

//   return Object.keys(startList)
//     .filter(name => startList[name] > 0)
//     .toString();
// }

// function solution(participant, completion) {
//   const startListLastIndex = participant.length - 1;
//   const endListLastIndex = completion.length - 1;
//   const startList = { ...participant.sort() };
//   const endList = { ...completion.sort() };

//   const getStraggler = {
//     true: startList[startListLastIndex - 1],
//     false: startList[startListLastIndex],
//   };

//   return (
//     getStraggler[startList[startListLastIndex] === endList[endListLastIndex]] ||
//     '해당없음'
//   );
// }

// function solution(participant, completion) {
//   const result = {};
//   participant.filter(person => (result[person] = ++result[person] || 1));
//   completion.filter(person => --result[person]);

//   return Object.keys(result).filter(name => result[name] > 0)[0];
// }
// const participant = ['leo', 'kiki', 'eden'];
// const completion = ['eden', 'kiki'];
// console.log(solution(participant, completion));

// const solution = (participant, completion) => {
//   const startList = [...participant.sort()];
//   const endList = [...completion.sort()];

//   const getStraggler = {
//     true: startList[startList.length - 2],
//     false: startList[startList.length - 1],
//   };

//   return (
//     getStraggler[
//       startList[startList.length - 1] === endList[startList.length - 2]
//     ] || '해당없음'
//   );
// };

// function solution(nums) {
//   return (
//     (nums.length / 2 < new Set(nums).size && nums.length / 2) ||
//     new Set(nums).size
//   );
// }

// console.log(solution([3, 1, 2, 3]));
