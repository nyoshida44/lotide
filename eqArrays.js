// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays Function
const eqArrays = function(arrayCheck, arrayWant) {
  let arrayResult = false;
  for (i = 0; i < arrayCheck.length; i++) {
    console.log(arrayCheck[i]);
    console.log(arrayWant[i]);
    if (arrayCheck[i] === arrayWant[i]) arrayResult = true;
    else arrayResult = false;
  }
  return arrayResult;
};

// Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS