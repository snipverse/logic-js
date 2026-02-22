//Write a program that generates a random number
function generateRandomNumber(maxNumber){
  let random = (Math.floor(Math.random() * maxNumber)) + 1;
  console.log(random);
}
console.log(generateRandomNumber(10));

let minMumber = 11;
let maxNumber = 21; //DON'T INCLUDE 21
function randomNumber(maxNumber, minMumber) {
  let randomNumber = Math.floor(Math.random() * (maxNumber - minMumber) + minMumber);
  return randomNumber;
}
console.log(randomNumber(minMumber, maxNumber));