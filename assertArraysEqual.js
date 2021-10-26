// eqArrays Function
const eqArrays = function(arrayCheck, arrayWant) {
  let arrayResult = false;
  for (i = 0; i < arrayCheck.length; i++) {
    if (arrayCheck[i] === arrayWant[i]) arrayResult = true;
    else arrayResult = false;
  }
  return arrayResult;
};

// assertArraysEqual Function
const assertArraysEqual = function() {

};