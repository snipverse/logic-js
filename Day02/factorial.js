// function factorial(n) {
  // if (n < 0){
  //   throw new Error("Negative numbers are not allowed");
  // }
//   if ( n === 0) {
//     return 1;
//   }
//   return n * factorial(n -1);
// }
// console.log(factorial(0));
// console.log(factorial(10));
// console.log(factorial(-1));

function factorialOfNum(number) {
  if (typeof number !== "number") {
    throw new Error("The input value should be number")
  }
  if (number < 0) {
    throw new Error("Negative numbers are not allowed");
  }
  let result = 1;
  for (let i = 1; i <= number; i++){
    result *= i ;
  }
  return result;
}
// console.log(factorialOfNum("sachin"));
console.log(factorialOfNum(0));
console.log(factorialOfNum(10));
