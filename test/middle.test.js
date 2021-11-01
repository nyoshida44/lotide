const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it("returns [69] for [25, 7, 13, 69, 'red, true, 32]", () => {
    assert.deepEqual(middle([25, 7, 13, 69, "red", true, 32]), [69]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [7] for [7]", () => {
    assert.deepEqual(middle([7]), []);
  });
});