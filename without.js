

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}   !==  ${expected}`);
  }
  return;
  
};


const eqArrays = function (arr1,  arr2) {     
  if (arr1.length !== arr2.length){         //checking if length is the same
    return false;
  }
  return arr1.toString()===arr2.toString(); //turn into string in order to compare arrays
}

const without = function (source, itemsremoved){
  let newarr = source;

  for (i=0; i<itemsremoved.length; i++){    //looping through itemsremoved array
  
  let index = newarr.indexOf(itemsremoved[i]) 
  if (index !== -1)  {
    newarr.splice(index, 1)                //removing array items via index
    
  }
  
}
return newarr;
}

console.log(without([1, 2, 3], [1, 2])) // => [3]

