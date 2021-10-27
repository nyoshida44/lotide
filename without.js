// eqArrays Function
const eqArrays = function(arrayCheck, arrayWant) {
  let arrayResult = false;
  for (let i = 0; i < arrayCheck.length; i++) {
    if (arrayCheck[i] === arrayWant[i]) arrayResult = true;
    else return false;
  }
  return arrayResult;
};

// assertArraysEqual Function
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true){
    console.log(`😀😀😀 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else console.log(`💩💩💩 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

// without Function

const without = function(arraySource, arrayRemove) {
  let withoutArray = [];
  if (eqArrays(arraySource, arrayRemove) === false) {
    // First for loop selects each value at arraySource.
    for (let i = 0; i < arraySource.length; i++) { 
      // Count crucial to see if all values have been compared in loops
      let count = 0;
      // Second for loop selects each value at arrayRemove.
      for (let j = 0; j < arrayRemove.length; j++) {
        // If statement to see if value in arraySource is not the same as the value in arrayRemove
        if (arraySource[i] !== arrayRemove[j]) {
          // Counts for every not same value
          count += 1
          // IMPORTANT: Count will me maxed out or same as arrayRemove.length if all values are 
          // not the same. This means that all arrayRemove values do not match and as a result
          // that arraySource value is approved to be pushed.
          if (count === arrayRemove.length) {
            withoutArray.push(arraySource[i]);
          }
        }
      }
    }
  }
  return withoutArray;
};

// Tests
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([12, 2, 7, 6, 2, 4, "2", 12], [12, "2"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);