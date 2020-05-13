function getAllPossibleWords(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const finalArr = [];
    const restArr = getAllPossibleWords(arr.slice(1));
    for (let i = 0; i < restArr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        finalArr.push(arr[0][j] + restArr[i]);
      }
    }
    return finalArr;
  }
}

module.exports = { getAllPossibleWords };
