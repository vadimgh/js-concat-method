const arrayLikeObject = {
  length: 3,
  0: 'one',
  1: 'two',
  2: 'three',
  [Symbol.isConcatSpreadable]: true
};

const array = Array.prototype.concat.call(arrayLikeObject, 'four', 'five');

console.log(array);