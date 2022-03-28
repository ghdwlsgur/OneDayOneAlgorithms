//=============================================================
// Write a function which takes two numbers and returns their sum.
//=============================================================

// 1. Can I restate the problem in my own words ?

// 2. What are the inputs that go into the problem ?

// 3. What are the outputs that should come from the solution to the problem ?

// 4. Can the outputs be determined from the inputs ? In other words,
// do I have enough information to solve the problem

// 5. How should I label the important pieces  of data that are a part of the problem ?

// charCount('aaaa'); // { a: 4 }
// charCount('hello'); // {h:1, e:1, l:2, o:1}

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  // if the char is a number/letter AND is a key in object, add one to count
  // if the char is a number/letter AND not in object, add it and set value to 1
  // if character is something else (space, period, etc. ) don't do anything
  // return object at end
  let result = {};
  const regexp = /[(\s*)\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  str = str.replace(regexp, '');
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) result[char]++;
    else result[char] = 1;
  }
  return result;
}

console.log(charCount('hello'));
console.log(charCount('Hi there!'));
