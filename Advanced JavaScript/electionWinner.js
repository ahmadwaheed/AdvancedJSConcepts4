const electionWinner = (votes) => {
  let voteCount = {};
  let winner = [];
  let highestVotes = 0;

  for (let i = 0; i < votes.length; i++) {
    if (voteCount[votes[i]]) {
     voteCount[votes[i]]++; 
    } else {
      voteCount[votes[i]] = 1;
    }
  }

  for (var key in voteCount) {
    if (voteCount[key] > highestVotes) {
      highestVotes = voteCount[key];
      winner=[key];
    } else {
      if (voteCount[key] === highestVotes) {
        winner.push(key);
      }
    }
  }

  let actualWinner = winner.sort(function(a,b){a - b});
  return actualWinner[actualWinner.length - 1];
}