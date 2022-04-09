const solution = arr => {
  return arr.filter((num, i) => num !== arr[i + 1]);
};

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
