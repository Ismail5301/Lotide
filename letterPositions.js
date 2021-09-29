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

const letterPositions = function(sentence) {
  const results = {};
  for (letter of sentence){
    results[letter] = [];
  }
  for (let a in results){
    for (let b = 0; b < sentence.length; b++){
      if(a === sentence[b]){
        results[a].push(b);
      }
    }
  }
  return results;
  }
 

  assertArraysEqual(letterPositions("hello").e, [1]);  
