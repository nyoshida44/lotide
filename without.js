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
  console.log(eqArrays(arraySource, arrayRemove));
  if (eqArrays(arraySource, arrayRemove) === false) {
    for (let i = 0; i < arraySource.length; i++) {
      if (arraySource[i] !== arrayRemove[i]) {
        withoutArray.push(arraySource[i]);
      }
    }
  }
  return withoutArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));