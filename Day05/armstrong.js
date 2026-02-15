function isArmstrong(inputNumber){
  let number = inputNumber;
  const digits = [];
  while(number > 0){
    let lastDigit = number % 10;
    // console.log("last digit is", lastDigit);
    number = Math.floor(number / 10);
    // console.log("remaining number is", number);
    digits.push(lastDigit);
  }
  const length = digits.length;
  let sum = 0;
  digits.forEach((d)=> {
    sum += Math.pow(d, length);
  })

  return sum === inputNumber;
}
console.log(isArmstrong(153));
console.log(isArmstrong(370));
console.log(isArmstrong(243));


