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

// Tests if console.log statements look right
assertArraysEqual([1,2,3], [1,2,3]); // Should Give Pass Message
assertArraysEqual([1,2,3], [4,5,6]); //Should Give Fail Message