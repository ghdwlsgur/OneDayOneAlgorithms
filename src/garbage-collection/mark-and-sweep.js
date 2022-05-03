let HEAP = [];

const A = {
  language: 'JavaScript',
};
const B = {
  language: 'Rust',
};
const C = {
  language: 'Elm',
};
const D = {
  language: 'GoLang',
};

HEAP.push(A); // Heap 메모리에 A 객체 할당
HEAP.push(B); // Heap 메모리에 B 객체 할당
HEAP.push(C); // Heap 메모리에 C 객체 할당
HEAP.push(D); // Heap 메모리에 D 객체 할당

const root = () => HEAP[0];

// A.B = B; // A 객체는 B 객체를 참조
B.C = C; // B 객체는 C 객체를 참조
C.D = D; // C 객체는 D 객체를 참조

/**
 * ! DESCRIPTION

 [ 
  { language: 'JavaScript', B: { language: 'Rust', C: { language: 'Elm', D: { language: 'GoLang' } } } },
  { language: 'Rust', C: { language: 'Elm', D: { language: 'GoLang' } } },
  { language: 'Elm', D: { language: 'GoLang' } },
  { language: 'GoLang' } 
 ]
 */

const gc = () => {
  mark();
  sweep();
};

const mark = () => {
  let reachables = [root()];

  while (reachables.length) {
    let current = reachables.pop();

    if (!current.__markBit__) {
      current.__markBit__ = 1;

      for (let i in current) {
        // console.log('for:' + JSON.stringify(current[i]));
        if (typeof current[i] === 'object') {
          reachables.push(current[i]);
        }
      }
    }
  }

  // console.log(`result: ${JSON.stringify(reachables)}`);
};

const sweep = () => {
  HEAP = HEAP.filter(current => {
    if (current.__markBit__ === 1) {
      current.__markBit__ = 0;
      return true;
    } else return false;
  });
};

const main = () => {
  // console.log(HEAP);

  gc();

  console.log(HEAP);
};

main();
