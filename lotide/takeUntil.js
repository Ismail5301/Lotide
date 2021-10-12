const takeUntil = function(array, callback) {
  let newArr = [];
  for (let i=0; i<array.length; i++) {
    if(callback(array[i])){
      return newArr;
    } newArr.push(array[i]);
  }
  return newArr;
}

module.exports = takeUntil;