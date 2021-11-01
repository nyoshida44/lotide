// middle Function
const middle = function(array) {
  let middleArray = [];
  let middle = Math.floor(array.length / 2);
  for (let i = 0; i < array.length; i++) {
    if (array.length > 2) {
      if (array.length % 2 === 0) {
        if (i === middle || i === (middle - 1)) {
          middleArray.push(array[i]);
        }
      } else if (array.length % 2 === 1 && i === middle) {
        middleArray.push(array[i]);
      }
    }
  }
  return middleArray;
};

module.exports = middle;