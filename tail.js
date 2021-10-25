// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// tail Function
const tail = function(array) {
  return array.slice(1);
};

// Test if tail works and array is not ppermanently changed
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");
assertEqual(words.length, 3);

const single = [21];
console.log(tail(single));
assertEqual(tail(single).length, 0);

const empty = [];
console.log(tail(empty));
assertEqual(tail(empty).length, 0);