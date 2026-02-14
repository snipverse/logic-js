// function isPrime(inputNumber){
//   if (typeof inputNumber !== "number" || !Number.isFinite(inputNumber)) {
//     throw new Error("Input must be a valid number.");
//   }
//   if (!Number.isInteger(inputNumber)) {
//     throw new Error("Input must be an integer.");
//   }
//   if (inputNumber <= 1) return false;
//   let result = true;
//   for(let i=2; i<inputNumber; i++){
//     console.log(inputNumber, '%', i, inputNumber % i);
//     if(inputNumber % i === 0){
//       result = false;
//       break;
//     }
//   }
//   return result;
// }
// console.log(isPrime(10));
// console.log(isPrime(7));
// console.log(isPrime(9));
// console.log(isPrime(11));

function isPrime2(inputNumber){
  let result = true;
  if (inputNumber <= 1) return false;
  if (inputNumber === 2) return true;
  if (inputNumber %2 === 0) result = false; //eliminating all odd numbers as only 2 is even prime.
  if (result === true){
    for (let i = 3; i <inputNumber; i= i+2){
      if (inputNumber % i === 0){
        result = false;
        break;
      }
    }
  }
  return result;
}
console.log(isPrime2(11));
console.log(isPrime2(10));
console.log(isPrime2(9));
