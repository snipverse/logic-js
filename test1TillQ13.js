// 1.program to print "Hello World!"
console.log("Hello World!");

// 2.fn to take 2 numbers as input and print their sum
function addInputs(a, b){
  let sum= a + b;
  return sum;
}
console.log(addInputs(10,20));
console.log(addInputs(-10,20));

// 3. Fn to calculate and print the are of a rectangle given its length and width
function calculateArea(length, width){
  if(typeof length !== "number" || width !== "number"){
    throw new Error("Input should be positive integer")
  }
  if (length <= 0){
    throw new Error("Length should be positive integer")
  }
  if (width <= 0) {
    throw new Error("width should be positive integer");
  }
  let area = length * width;
  return area;
}
console.log(calculateArea(5,10));

// 4.fn to find odd and even
function oddEven(n){
  if (n % 2 == 0 ){
    console.log(`${n} is even number`);
  }
  else {
    console.log(`${n} is odd number`);
  }
}
oddEven(10);
oddEven(11);

// // 5. print smallest among 3.
function findSmallest(a, b, c){
  if( a < b && a <c) return a;
  if (b < a && b < c) return b;
  else return c;
}
console.log(findSmallest(10,20,30));
console.log(findSmallest(10, 20, -30));

// 6.write a fn that returns the reverse of the string 
function reverseString(inputString){
  return inputString.split('').reverse().join('');
}
console.log(reverseString("Sachin"));

// 7.write a fn to calculate facorial of a no.
function factorial(n){
  if (n < 0){
    throw new Error("For calculating factorial no should be positive")
  }
  if (n === 0){
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}
console.log(factorial(5))

// 8. Write a fn that tells if provided year is leap or not.
function isLeapYear(year){
  if((year % 4 === 0 &&  year % 100 !== 0) || year % 400 === 0){
    return `${year} Is leap year`;
  }
  else {
    return `${year} is not a leap year`
  }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));

// 9.write a fn to caculate and print the sum of the digits of a given number
function sumOfDigits(inputNumber){
  inputNumber = inputNumber.toString();
  let splittedNumber = inputNumber.split('');
  let sum = 0;
  splittedNumber.forEach(num => {
    sum += parseInt(num);
  })
  return sum;
}
console.log(sumOfDigits(101));
console.log(sumOfDigits(126));

// 10.write a fn to generates and print a multiplication table for a given number up to a specified range
function generateTable(tableOf, tableTill){
  for (let i = 1; i <= tableTill; i++){
    console.log(`${tableOf} * ${i} = ${tableOf * i}`);
  }
}
generateTable(2, 10);

//11. Write a fn that finds and prints the maximum elements in an array of number
function findMax(array){
  let max = array[0];
  for (let i= 1; i< array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }
  return max;
}
console.log(findMax([10,50,60,10]));

//12. write a fn that checks if a string is a pallindrome or not?
function isPallindrome(inputString){
  const reversedString = inputString.split('').reverse().join('');
  return inputString === reversedString
}
console.log(isPallindrome("Sachin"));
console.log(isPallindrome("level"));

//13. Write a fn that returns the result of reaising a give number to a specified power. (can't use Math.pow())
function calculatePower(base, exponet){
  let result = 1;
  for (let i = 1; i <=exponet; i++){
    result *= base;
  }
  return result;
}
console.log(calculatePower(2,3));