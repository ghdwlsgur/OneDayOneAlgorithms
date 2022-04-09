const solution = (array, commands) => {
  const result = [];
  commands.map(command => {
    let newArray = [
      ...array.slice(command[0] - 1, command[1]).sort((a, b) => a - b),
    ];
    result.push(newArray[command[2] - 1]);
  });

  return result;
};

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3]]);
