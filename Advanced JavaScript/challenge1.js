
function numberOfPairs (a, k) {
  var obj = {};
  var totalPairsArray = [];

  for ( var i = 0 ; i < a.length; i++) {
    for (var j = 1; j < a.length; j++) {
      if (a[i] + a[j] === k) {
        if ((totalPairsArray.indexOf((${a[i]}, ${a[j]})) === -1 ) && (totalPairsArray.indexOf((${a[j]}, ${a[i]})) === -1 ) ) {
          totalPairsArray.push((${a[i]}, ${a[j]}));
        }
      }
    }
  }
  return totalPairsArray.length;
}



const canReach = (x1, y1, x2, y2) => {
  if (x1 === x2 && y1 === y2) {
    return 'Yes';
  } else if ( x1 > x2 || y1 > y2) {
    return 'No';
  } else {
    canReach((x1 + y1), y1, x2, y2);
  }
}