'use strict';

function solution(lottos, win_nums) {
  let minCount = 0;
  let maxCount = 0;

  const lotto = {};
  for (let i = 0; i < lottos.length; i++) {
    lotto[lottos[i]] = ++lotto[lottos[i]] || 1;
  }

  const correct = {};
  for (let i = 0; i < win_nums.length; i++) {
    correct[win_nums[i]] = ++correct[win_nums[i]] || 1;
  }

  for (let key in lotto) {
    if (key in correct) minCount++;
    if (lotto[key] > 0 && parseInt(key) === 0) maxCount += lotto[key];
  }

  maxCount += minCount;
  const result = [];
  result[0] = returnRank(maxCount);
  result[1] = returnRank(minCount);

  return result;
}

const returnRank = count => {
  switch (count) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
};

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
