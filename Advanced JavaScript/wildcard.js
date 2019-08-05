
function isMember(arrayOfWords, query) {
  var containWildCard = false;
  var sameLengthWords = arrayOfWords.filter(item => item.length === query.length);
  var indexArray = [];

  var splitQuery = query.split('');
  for (var i = 0; i < splitQuery.length; i++) {
    if(splitQuery[i] === '.') {
      indexArray.push(i);
      containWildCard = true;
    }
  }
   var newQuery = [];

  for (var j = 0; j < sameLengthWords.length; j++) {
   for (var k = 0; k < indexArray.length; k++) {
     newQuery = newQuery.concat(sameLengthWords[j].split('').slice(0,indexArray[k]).join(''));
     newQuery = newQuery.concat(sameLengthWords[j].split('').slice(indexArray[k]).join(''))
   }
  }

  console.log(newQuery);

if (containWildCard) {
  
//
} else {
  return sameLengthWords.indexOf(query) !== -1;
}
  
}