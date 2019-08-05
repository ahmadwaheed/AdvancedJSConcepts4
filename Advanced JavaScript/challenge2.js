function electionWinner(votes) {

  var obj  ={};  //an object 
  var topCandidates = [];  //an array 

  for (var i = 0 ; i < votes.length; i++) {
    if (obj[votes[i]]) {  // checks if i exists in votes 
      obj[votes[i]] = obj[votes[i]] + 1;  // adds
    } else {
      obj[votes[i]] = 1;
    }
  }

  var newArr = Object.values(obj).sort();  // sort alphabetically

  for (var key in obj) {
    if (obj[key] === newArr[newArr.length - 1]) {
      topCandidates.push(key);
    }
  }

  var winner = topCandidates.sort();
  return winner[winner.length - 1];
}