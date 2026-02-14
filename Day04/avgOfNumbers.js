function avgOfNumbers(array){
  if (!Array.isArray (array) || array.length === 0){
    throw new Error("Input should be Array a positive integer numbers.")
  }
  for (let value of array){
    if(typeof value !== "number" || value <=0){
      throw new Error("Array should contains only positive numbers.")
    }
  }
  let sum = 0;
  for(let i=0; i <=array.length - 1; i++){
    sum += array[i];
  }
  return sum / array.length;
}
console.log(avgOfNumbers([10,20,30]));
console.log(avgOfNumbers([1, 2, 7, 14]));

console.log(avgOfNumbers([10, 20, "sachin"]));
