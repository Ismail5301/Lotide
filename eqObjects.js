
const eqArrays = function (arr1,  arr2) {     
  if (arr1.length !== arr2.length){         //checking if length is the same
    return false;
  }
  return arr1.toString()===arr2.toString(); //turn into string in order to compare arrays
};
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keys in object1) {
      if ((Array.isArray(object1[keys]) && Array.isArray(object2[keys]))) {
        if (eqArrays(object1[keys], object2[keys]) === false) {
        return false
        }
      } else {
        if (object1[keys] !== object2[keys]) {
        return false;
        }
      }
    }
  return true;
  }
};
module.exports = eqObjects; 