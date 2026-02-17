function transposeMatrix(inputArray){
  let noOfRows = inputArray.length;
  let noOfColumns = inputArray[0].length;

  let transposedArray = [];
  for (let i=0; i< noOfRows; i++){
    for (let j=0; j <noOfColumns; j++){
      if (!transposedArray[j]){
        transposedArray[j] = []
      }
      transposedArray[j][i] = inputArray[i][j];
    }
  }
  return transposedArray;
}
let inputArray= [
  [3,4,8],
  [5,6,9]
]
console.log(transposeMatrix(inputArray));