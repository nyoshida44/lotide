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
        if (eqArrays(object1[key], object2[key]) === false) {
          console.log(false);
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        console.log(false);
        return false;
      }
    }
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba);
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc);
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc);
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(cd, cd2);
eqObjects(cd, cd2); // => false

module.exports = eqObjects;