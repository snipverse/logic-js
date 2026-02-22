// write a program to find all paindromic substings within a given string.
//input: a string
// output: Array of all pallindromic substrings
// example: bradarasdmadama -> ["radar", "madam"] etc.
// sachin: -> [] (kyuki koi bhi matching nhi hai)

function ispalindrome(inputString){
  for (let i =0; i <= inputString.length / 2; i++){
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function palindromicSubstring(inputString){
  const result = new Set();
  for(let i=0; i< inputString.length; i++){
    for (let j= i + 1; j<= inputString.length; j++){
      const substr = inputString.slice(i, j)
      if(ispalindrome(substr) && substr.length > 1){
        result.add(substr);
      }
    }
  }
  return result;
}
console.log(palindromicSubstring("sachin"));
console.log(palindromicSubstring("level"));
console.log(palindromicSubstring("bradarasdmadama"));

