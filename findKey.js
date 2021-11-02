// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findkey Function
const findKey = (object, callback) => {
  for (const i in object) {
    if (callback(object[i]) === true) return i;
  }
};

// Tests
let restaurants =
{
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(findKey(restaurants, x => x.stars === 2));
assertEqual(findKey(restaurants, x => x.stars === 2), "noma"); // => "noma"

let destinations =
{
  "Manhattan": { stars: 4 },
  "Tokyo":   { stars: 2 },
  Berlin:      { stars: 5 },
  21:   { stars: 3 },
  "London":       { stars: 1 },
  "Shanghai":  { stars: 3 }
};

console.log(findKey(destinations, x => x.stars === 3));
assertEqual(findKey(destinations, x => x.stars === 3), "21"); // => 21

module.exports = findKey;