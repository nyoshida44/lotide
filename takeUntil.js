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

const takeUntil = function(array, callback) {
  let emptyArray = [];
  for (const arr of array) {
    if (callback(arr) === false) emptyArray.push(arr);
    else if (callback(arr) === true)  return emptyArray;
  }
  return emptyArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;