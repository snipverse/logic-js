function numberPyramids(inputNumber){
  for(let i=1; i<= inputNumber; i++){
    let contentLine = "";
    for (let space=1; space <= inputNumber -i; space++){
      contentLine = contentLine + ' ';
    }
    for (let count=1; count <= i ; count++){
      contentLine = contentLine + count;
    }
    for (reverseCount = i -1; reverseCount >= 1; reverseCount--){
      contentLine = contentLine + reverseCount;
    }
    console.log(contentLine);
  }
}
numberPyramids(10);

