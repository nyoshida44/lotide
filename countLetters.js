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

console.log(countLetters("Letter in Paris"));