// const solution = (skill, skill_trees) => {
//   const test = skill.split('');
//   const bucket = {};
//   skill_trees.map(alpha => {
//     bucket[alpha] = ++bucket[test[0]] || 1;
//   });
//   console.log(test);
// };

// solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);

const user = { name: '홍진혁' };
user.name = '홍진호';
console.log(user);

delete user.name;
console.log(user);

user.job = 'cloud engineer';
console.log(user);

const arr = ['홍진혁'];
arr.push('홍진호');
console.log(arr);
arr.splice(0, 1);
console.log(arr);
