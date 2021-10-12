const assertEqual = require('./assertEqual')

const middle = function(newArr) {
  if (newArr.length <= 2) {  //Check to see if Array length has more than 2 elements
    return [];
  } else if (newArr.length % 2 === 0) { // If Array is even, it means there are two middle elements
    return console.log([newArr[(newArr.length) / 2 - 1], newArr[(newArr.length / 2)]]);
  } else {
    return console.log([newArr[Math.floor(newArr.length / 2)]]); //When Array is odd, there is only one middle element
  }
};


module.exports = middle;