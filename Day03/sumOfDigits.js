// function sumOfDigits(inputNumber){
//   if(typeof inputNumber !== "number"){
//     throw new Error("Input should be a Number");
//   }
//   if(inputNumber < 0) {
//     throw new Error("Input number should be positive");
//   }
//   let inputNumberAString = inputNumber.toString();
//   let splittedInput = inputNumberAString.split('');
//   let sumOfDigits = 0;
//   splittedInput.forEach(num =>{
//     sumOfDigits += parseInt(num);
//   })
//   return sumOfDigits;
// }
// console.log(sumOfDigits(15));
// console.log(sumOfDigits(100));

// method 2 by modulo
function sumOfDigits(inputNumber){
  if(inputNumber < 0) {
    throw new Error("Input number should be positive");
  }
  let number = inputNumber;
  let sum = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    sum += lastDigit
  }
  return sum;
}
console.log(sumOfDigits(24));
console.log(sumOfDigits(-34));
console.log(sumOfDigits(34));


