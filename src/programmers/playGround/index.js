const solution = string => {
  if (string.length === 4 || string.length === 6) return !isNaN(string);
  return false;
};

console.log(solution('123,123'));
