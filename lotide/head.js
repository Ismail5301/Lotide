// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr.shift();
};

module.exports = head;


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(23, 45);
assertEqual("new", "new");
assertEqual(([5,6,7]), 5);
assertEqual((["Hello", "Lighthouse", "Labs"]), "Hello");



