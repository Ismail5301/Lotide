
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}   !==  + ${expected}`);
  }
  return;
assertEqual();
  
};


const eqArrays = function (arr1,  arr2) {     
  if (arr1.length !== arr2.length){         //checking if length is the same
    return false;
  }
  return arr1.toString()===arr2.toString(); //turn into string in order to compare arrays
}

//Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 3, 4], [2, 4, 6]), true);
