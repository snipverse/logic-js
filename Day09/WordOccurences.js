// write a program that finds all occurences of a given word in a big string. 
// input: big string, word to find 
// output: array of all starting indexex where the word exists iin the BIG string
//Logic: We will use indexOf method which takes 2 arguments: 1)Search string 2) posistion - optional , returns the first index or -1(if word not found), loop throughh and find all occurences, Use position to find the next occurence inside the loop

// my try
// function wordOccurences(bigString, word){
//   // let splittedString = bigString.split(' ');
//   // console.log(splittedString);
//   let result = []
//   for (let i = 0; i < bigString.length; i++) {
//     if (bigString[i] === word.length) {
//       result.push(i);
//     }
//     // console.log(i);
//   }
//   return result;
//   // console.log(bigString, word);
// }
// console.log(wordOccurences("This is a big string with the word big repeated in the big string.", "big"))

function findWordOccurences(bigString, word){
  let indexofString = bigString.indexOf(word);
  let result = []
  while (indexofString !== -1){
    result.push(indexofString);
    indexofString = bigString.indexOf(word, indexofString + 1); // this is line is after beacuse if the index is 10 , so want first 10 to be added in array, then only increase the index by one
  } 
  return result;
}
console.log(findWordOccurences("This is a big string with the word big repeated in the big string.", "big"));
