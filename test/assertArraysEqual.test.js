const assertArraysEqual = require('../assertArraysEqual')

// Tests if console.log statements look right
assertArraysEqual([1,2,3], [1,2,3]); // Should Give Pass Message
assertArraysEqual([1,2,3], [4,5,6]); //Should Give Fail Message