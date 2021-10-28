// eqArrays Function
const eqArrays = function(arrayCheck, arrayWant) {
  let arrayResult = false;
  for (let i = 0; i < arrayCheck.length; i++) {
    if (arrayCheck[i] === arrayWant[i] && arrayCheck.length === arrayWant.length) arrayResult = true;
    else return false;
  }
  return arrayResult;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) return false;
      } else if (object1[key] !== object2[key]) return false;
    }
    return true;
  }
  return false;
};

// assertObjectsEqual function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) {
    console.log(`😀😀😀 Assertion Passed: Object ${inspect(actual)} === Object ${inspect(expected)}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: Object ${inspect(actual)} !== Object ${inspect(expected)}`);
  }
};

// Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // Should Pass!

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // Should Fail!

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // Should Pass!

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // Should Fail!