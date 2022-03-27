const users = [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'BJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 7, name: 'JI', age: 31 },
  { id: 8, name: 'MP', age: 23 },
];

// 명령형 코드
// 30세 이상인 users를 거른다.
const answer = [];
for (let i = 0; i < users.length; i += 1) {
  if (users[i].age >= 30) answer.push(users[i]);
}

// 30세 이상인 users의 name를 수집
const answer2 = [];
for (let i = 0; i < users.length; i += 1) {
  if (users[i].age >= 30) answer2.push(users[i].name);
}

// 30세 미만인 users를 거른다.
const answer3 = [];
for (let i = 0; i < users.length; i += 1) {
  if (users[i].age < 30) answer3.push(users[i]);
}

// 30세 미만인 users의 age를 수집
const answer4 = [];
for (let i = 0; i < users.length; i += 1) {
  if (users[i].age < 30) answer4.push(users[i].age);
}

function _filter(arr, predi) {
  const newArr = [];
  _each(arr, val => {
    if (predi(val)) {
      newArr.push(val);
    }
  });
  return newArr;
}

function _map(arr, mapper) {
  const newArr = [];
  _each(arr, val => {
    newArr.push(mapper(val));
  });
  return newArr;
}

function _each(arr, iter) {
  for (let i = 0; i < arr.length; i += 1) {
    iter(arr[i], i);
  }
}

// 커링, curry curryr
// 커링 : 함수와 인자를 다루는 기법, 함수에 인자를 하나씩 적용하다가 필요한 인자를 다 넘겼으면 함수 본체를 실행

function _curry(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}

let add = _curry((a, b) => a + b);
let add10 = add(10);
console.log(add10(5));
console.log(add(5)(3));
