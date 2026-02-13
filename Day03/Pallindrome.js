// function isPallindrome(inputStr) {

//   for (let i = 0; i <= inputStr.length /2 ; i++){
//     if (inputStr[i] !== inputStr[inputStr.length - 1 - i]) //console.log('i is', i); console.log(inputStr.length - 1 - i);
//     {
//       return false;
//     }
//   } 
//   return true;
  
// }
// console.log(isPallindrome('level'));
// console.log(isPallindrome("Sachin"));

// function isPallindrome2(inputString) {
//   inputString = inputString.toLowerCase();
//   let start = 0;
//   let end = inputString.length - 1;
//   for (start, end; start < end; start++, end--){
//     if(inputString[start] !== inputString[end]){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPallindrome2("Akash"));
// console.log(isPallindrome2("level"));
// console.log(isPallindrome2("Ababa"));


// function isPallindrome3(inputString) {
//   inputString = inputString.toLowerCase();
//   let splittedString = inputString.split('');
//   let reverseString = splittedString.reverse();
//   let reversedString = reverseString.join('')
//   if (inputString === reversedStrind){
//     return true;
//   }
//   return false;

// }
//shorter version
// function isPallindrome3(inputString){
//   inputString = inputString.toLowerCase();
//   let reversedString = inputString.split('').reverse().join('');
//   return inputString === reversedString;
// }
// console.log(isPallindrome3("sachin"));
// console.log(isPallindrome3("level"));
// console.log(isPallindrome3("lala"));
// console.log(isPallindrome3("ullu"));

//reverse a integer
function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  let reversedX = str.split("").reverse().join("");
  return str === reversedX;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));



