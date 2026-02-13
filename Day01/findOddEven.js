function findOddEven(number) {
  if(number % 2 == 0) {
    console.log(`${number} is a even number`);
  }
  else {
    console.log(`${number} is a odd number`);
  }
}

findOddEven(-1);

function oddEven(n) {
  return n % 2 == 0 ? `${n} is Even number.` : `${n} is Odd number.`
}
console.log(oddEven(5));