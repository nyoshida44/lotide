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
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`😀😀😀 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else console.log(`💩💩💩 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

// middle Function
const middle = function(array) {
  let middleArray = [];
  let middle = Math.floor(array.length / 2);
  for (let i = 0; i < array.length; i++) {
    if (array.length > 2) {
      if (array.length % 2 === 0) {
        if (i === middle || i === (middle - 1)) {
          middleArray.push(array[i]);
        }
      } else if (array.length % 2 === 1 && i === middle) {
        middleArray.push(array[i]);
      }
    }
  }
  return middleArray;
};


//tests
let test1 = [25, 7, 13, 69, "red", true, 32];
console.log(middle(test1));
assertArraysEqual(test1, [25, 7, 13, 69, "red", true, 32]);

let test2 = [1, 2, 3, 4, 5, 6];
console.log(middle(test2));
assertArraysEqual(test2, [1, 2, 3, 4, 5, 6]);

let test3 = [7];
console.log(middle([test3]));
assertArraysEqual(test3, [7]);