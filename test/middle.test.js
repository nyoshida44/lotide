// require the assertEqual function
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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