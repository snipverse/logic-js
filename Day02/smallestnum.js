// find a number that finds and prints the smallest number among three given numbers.

// function smallestNum(a, b, c) {
//   if (typeof a!== "number" || typeof b!== "number" || typeof c!== "number"){ 
//     throw new Error("The input is invalid!");
//   }
//   if (a < b && a < c) {
//     return a;
//   }
//   if (b < c && b < a) {
//     return b;
//   }
//   if (c < b && c < a) {
//     return c;
//   }
//   return a;
// }

// function smallestNum(a, b, c) {
//   if (typeof a!== "number" || typeof b!== "number" || typeof c!== "number") {
//     throw new Error("Invalid Input");
//   }
//   let smallestNumber = a;
//   if (b < smallestNumber) {
//     smallestNumber = b;
//   }
//   if (c < smallestNumber) {
//     smallestNumber = c;
//   }
//   return smallestNumber
// }
// console.log(smallestNum(10, 5, 2));

function smallestInArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid Data Type or empty array");
  }
  for (let value of arr) {
    if(typeof value !== "number") {
      throw new Error("Array must contain only numbers");
    }
  }
  let smallest = arr[0];
  for(let i=1; i < arr.length ; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestInArray([10,20,30,40,5]));
console.log(smallestInArray([]));
console.log(smallestInArray("sachin")); //invalid data type bcoz we only expect array


// console.log(smallestNum(10, 20 , 2));
// console.log(smallestNum(5,"Suraj", 6))
// console.log(smallestNum(9, 10, 10));
// console.log(smallestNum(10, 10, 10)); //undefined bcoz all are same so we can return any lets return a
// console.log(smallestNum(3,3,3)); //output 3