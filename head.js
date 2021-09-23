// FUNCTION IMPLEMENTATION

var head = require('lodash.head');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} +  !==  + ${expected}`);
  }
  
};



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(23, 45);
assertEqual("new", "new");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");



