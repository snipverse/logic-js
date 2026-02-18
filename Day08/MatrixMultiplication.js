function matrixMultiplication(array1, array2){
  let newArrayRows = array1.length;
  let newArrayColumns = array2[0].length;

  let rowInSecondArray = array2.length;
  let result = [];

  for (let i=0; i< newArrayRows; i++) //traversing array1.length
  {
    for (let j=0; j< newArrayColumns; j++) //array2[0].length
    {
      let cellValue = 0;
      for (let n=0; n< rowInSecondArray; n++){
        cellValue += array1[i][n] * array2[n][j]
      }
      if (!result[i]){
        result[i] = [];
      }
      result[i][j] = cellValue;
    }
  }
  return result;
}

const firstArray = [
  [1,2],
  [3,4]
]

const secondArray = [
  [5, 6],
  [7, 8],
];

console.log(matrixMultiplication(firstArray, secondArray));
