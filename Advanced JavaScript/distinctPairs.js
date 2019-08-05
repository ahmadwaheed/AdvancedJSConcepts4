const numberOfPairs = (numbers, target) => {
  let pairsArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        pairsArr.push('(' + numbers[i] + ',' + numbers[j] + ')');
      }
    }
  }

  return pairsArr;
}


onst numberOfPairs = (numbers, target) => {
  let pairsArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        if (pairsArr.indexOf('(' + numbers[j] + ',' + numbers[i] + ')'))
        pairsArr.push('(' + numbers[i] + ',' + numbers[j] + ')');
      }
    }
  }

  return pairsArr;
}



const numberOfPairs = (numbers, target) => {
  let pairsArr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        pairsArr.push('(' + numbers[i] + ',' + numbers[j] + ')');
      }
    }
  }

  return pairsArr;
}







