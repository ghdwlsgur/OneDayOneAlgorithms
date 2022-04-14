const solution = (skill, skill_trees) => {
  const test = skill.split('');
  const bucket = {};
  skill_trees.map(alpha => {
    bucket[alpha] = ++bucket[test[0]] || 1;
  });
  console.log(test);
};

solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);
