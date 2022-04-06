const solution = string => {
  const charArray = string.split('');
  if (charArray.length <= 1) return 0;

  const deletePair = () => {
    const startArray = [...charArray];
    for (let i = 0; i < charArray.length; i++) {
      if (charArray[i] === charArray[i + 1]) charArray.splice(i, 2);
    }

    if (startArray.length === charArray.length) return;
    else if (startArray.length !== charArray.length) deletePair();
  };

  deletePair();

  return charArray.length > 0 ? 0 : 1;
};

console.log(solution('aacsbbddeeggffggff'));