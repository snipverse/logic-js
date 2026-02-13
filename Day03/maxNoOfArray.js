function maxNoOfArray(inputArr) {
  if(!inputArr || inputArr.length === 0) // circuit breaking, input array ki lenght tb check krna jb ye kuchh value ho.
  {
    throw new Error("We need some numbers in array");
  }
  let maximum = inputArr[0];
  for (let i = 1; i <= inputArr.length; i++) {
    if (inputArr[i] > maximum) {
      maximum = inputArr[i];
    }
  }
  return maximum;
}

console.log(maxNoOfArray([10, 50, 8, 2, 9]));
// console.log(maxNoOfArray([]));

function findTheBiggestNumber(arrayOfNumbers) {
  const maxNumber = Math.max(...arrayOfNumbers);
  return maxNumber;
}
console.log(findTheBiggestNumber([10,50,10,550,222,0,2]));