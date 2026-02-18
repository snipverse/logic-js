function isPerfectNumber(inputNumber){
  let result = 0;
  for (let i=1; i < inputNumber; i++){
    if (inputNumber % i === 0){
      result += i;
    }
  }
  return inputNumber === result;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(30));
console.log(isPerfectNumber(8128));

