const assertArraysEqual = function(arr1, arr2) {
  while (arr1.length === arr2.length) {
    if (arr1.toString()===arr2.toString()){
      console.log(`✅✅✅ Assertion Passed:  ${arr1}  === ${arr2}`);
      return;
    }  
    else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${arr1}   !==  ${arr2}`);
    return;
    }};
if (arr1.length!==arr2.length){
    console.log(`🛑🛑🛑 Assertion Failed:  ${arr1}   !==   ${arr2}`)
    return;
    }     
};

//Tests
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 3, 4], [2, 4, 6]);