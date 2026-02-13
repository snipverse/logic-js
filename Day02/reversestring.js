// function reverseString(inputString) {
//   if (typeof inputString !== "string") {
//     throw new Error("Only Strings Are Allowed");
//   }
//   let result = "";
//   for (let i= inputString.length - 1; i >=0; i--) {
//     result += inputString[i];
//   }
//   return result;
// }

//throw array
// function reverseAString(inputString) {
//   const splittedString = inputString.split('');
//   const reversedArray = splittedString.reverse();
//   const resultedString = reversedArray.join('');
//   return resultedString;
// }

//short form
// function reverseAString(inputString) {
//   arr = inputString.split('').reverse().join('');
//   return arr;
// }
// console.log(reverseAString("Abhishek"));

// console.log(reverseAString("Mudit"));
// console.log(reverseString("Sachin"));
// console.log(reverseString("10"));
// console.log(reverseString(10)); //error: only string are allowed

//recursion reverse string

// function reverseAString(inputString) {
//   if ( inputString === "" || inputString.length === 1) {
//     return inputString;
//   }
//   return reverseAString(inputString.slice(1)) + inputString[0];
// }

// console.log(reverseAString("Akash"));

// with indexing

function reverseAString (str, i = str.length -1) {
  if (i < 0) {
    return "";
  }
  return str[i] + reverseAString(str, i - 1);
}
console.log(reverseAString("SanjuBaba"));

