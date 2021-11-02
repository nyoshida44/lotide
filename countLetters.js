// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters Function
const countLetters = function(wordToCount) {
  const letterStorage = {};
  for (let i of wordToCount) {
    if (letterStorage[i]) {
      letterStorage[i] += 1;
    } else {
      letterStorage[i] = 1;
    }
  }
  delete letterStorage[" "];
  return letterStorage;
};

// Test

const string = "letter in paris";
const test = countLetters(string);

console.log(test);

assertEqual(test["l"], 1);
assertEqual(test["e"], 2);
assertEqual(test["t"], 2);
assertEqual(test["r"], 2);
assertEqual(test["i"], 2);
assertEqual(test["n"], 1);
assertEqual(test["p"], 1);
assertEqual(test["a"], 1);
assertEqual(test["s"], 1);

module.exports = countLetters;