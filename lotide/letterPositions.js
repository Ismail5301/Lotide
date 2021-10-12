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
  };
  module.exports = letterPositions;
 