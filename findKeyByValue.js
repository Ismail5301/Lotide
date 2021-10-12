  const findKeyByValue = function(object, value){
    for (let keys in object) {
      if (object[keys]===value){
        return keys;
      }
    }
  }
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  module.exports = findKeyByValue;