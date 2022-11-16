/*
* Returns the average value of an array.
*
* @param {array} list - array of values that will be averaged.
*
*/


const average = function(list) {
  let sum = 0;
  for (let num of list) {
    sum += num;
  }
  return sum / list.length;
};

// Test Case
console.log(average([3, 5, 7]));