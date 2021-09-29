const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
  return;
};

const countLetters = function(string){
  const count = {};
  for (let letter of string.split('')) {
    count[letter] = 0;
  } for (let a in count) {
    for (let b of string.split('')) {
      if (a === b) {
        count[a]++;
      }
    }
  }
  return count;
}

//Test
console.log(countLetters('LHL'));

