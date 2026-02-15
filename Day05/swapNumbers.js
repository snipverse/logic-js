// with third variable
function swapTwoNumbers(a, b){
  let c = b; //10
  b = a; //5
  a = c; //10
  return `${a}, ${b}`
}
console.log(swapTwoNumbers(5,10));

// without third variable
function swapTwoNumbers2(a, b){
  a = a + b; //15
  b = a - b; //5 (15-10)
  a = a - b; //10 (15-5)
  return `${a}, ${b}`
}
console.log(swapTwoNumbers2(5, 10));
