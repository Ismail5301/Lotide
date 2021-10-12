const assertEqual = require('./assertEqual')

const eqArrays = function (arr1,  arr2) {     
  if (arr1.length !== arr2.length){         //checking if length is the same
    return false;
  }
  return arr1.toString()===arr2.toString(); //turn into string in order to compare arrays
}
module.exports = eqArrays;