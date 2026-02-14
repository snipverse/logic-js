function factorOfANumber(inputNumber){
  if (typeof inputNumber !== "number" || !Number.isFinite(inputNumber)) {
    throw new Error("Input must be a valid number");
  }
  if (!Number.isInteger(inputNumber)){
    throw new Error("Input must be an integer")
  }
  if (inputNumber < 0) {
    throw new Error("Input number should be positive")
  }
  let result =[];
  for (let i=1; i <=inputNumber ; i++){
    if (inputNumber % i === 0){
      result.push(i);
    }
  }
  return result;
}
console.log(factorOfANumber(10));
console.log(factorOfANumber(14));
console.log(factorOfANumber(35));
console.log(factorOfANumber("achin"));



// console.log(factorOfANumber(10.5));
