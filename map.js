// eqArrays Function
const eqArrays = function(arrayCheck, arrayWant) {
  let arrayResult = false;
  for (let i = 0; i < arrayCheck.length; i++) {
    if (arrayCheck[i] === arrayWant[i] && arrayCheck.length === arrayWant.length) arrayResult = true;
    else return false;
  }
  return arrayResult;
};

// assertArraysEqual Function
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`😀😀😀 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else console.log(`💩💩💩 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

// map Function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
console.log(results1);

const numbers = ["three", 3, "six", "zero", 0];
const results2 = map(numbers, word => word[0]);
assertArraysEqual(results2, [ 't',,'s' ,'z',,]);
console.log(results2);

const empty = [true];
const results3 = map(empty, word => word[0]);
assertArraysEqual(results3, [undefined]);
console.log(results3);

module.exports = map;