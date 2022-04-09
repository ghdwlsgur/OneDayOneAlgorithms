const solution = (id_list, report, k) => {
  const reportObj = {};
  const reportedObj = {};

  let result = [];
  for (let i = 0; i < id_list.length; i++) {
    reportObj[id_list[i]] = [];
    result[i] = 0;
  }

  report.filter(user => {
    const reportUser = user.split(' ')[0];
    const reportedUser = user.split(' ')[1];
    reportedObj[reportedUser] = 0;
    reportObj[reportUser].push(reportedUser);
  });

  Object.keys(reportObj).filter(user => {
    reportObj[user] = [...new Set(reportObj[user])];
    const reportedList = reportObj[user];
    reportedList.filter(reportedUser => {
      reportedObj[reportedUser] = ++reportedObj[reportedUser] || 1;
    });
  });

  Object.values(reportObj).forEach((userList, userIndex) => {
    for (let i = 0; i < userList.length; i++) {
      if (reportedObj[userList[i]] >= k) result[userIndex] += 1;
    }
    if (userList.length === 0) result[userIndex] = 0;
  });

  return result;
};

console.log(
  solution(
    ['con', 'ryan'],
    ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
    3,
  ),
);

// console.log(
//   solution(
//     ['muzi', 'frodo', 'apeach', 'neo'],
//     [
//       'muzi frodo',
//       'muzi frodo',
//       'apeach frodo',
//       'frodo neo',
//       'muzi neo',
//       'apeach muzi',
//     ],
//     3,
//   ),
// );
