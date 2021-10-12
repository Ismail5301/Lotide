const eqArrays = require('./eqArrays')

const assertArraysEqual = function(arr1, arr2) {
  while (arr1.length === arr2.length) {
    if (arr1.toString()===arr2.toString()){
      console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
      return;
    }  
    else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
    }};
if (arr1.length!==arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
    return;
    }     
};
module.exports = assertArraysEqual;
