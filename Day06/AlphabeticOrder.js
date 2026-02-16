// console.log('a' < 'b'); //(because a =97 and b =98)

function isAlphabeticOrder(inputString){
  inputString = inputString.toLowerCase();
  // console.log(inputString);
  inputString = inputString.replace(/ /g, '');
  for (let i=0; i < inputString.length - 1; i++){
    // console.log(inputString[i], inputString[i + 1]);
    if (inputString[i] > inputString[i + 1]){
      return false;
    }
  }
  return true;
}
console.log(isAlphabeticOrder("sura j  "));
console.log(isAlphabeticOrder("aadi"));
console.log(isAlphabeticOrder("abcdeab"));