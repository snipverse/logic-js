function countCharOccurence(inputString){
  inputString = inputString.toLowerCase();
  inputString = inputString.replaceAll(' ','');
  let charCount ={};

  for (let i=0; i < inputString.length; i++){
    let currentChar = inputString[i];
    if (charCount[currentChar]){
      charCount[currentChar] += 1;
    }
    else {
      charCount[currentChar] =1
    }
  }
  return charCount;
}
console.log(countCharOccurence("Sachin Pal"));
console.log(countCharOccurence("Ashish Saluja"));

// better than 1st approach
function countCharOccurence2(inputString){
  inputString = inputString.toLowerCase();
  inputString = inputString.replaceAll(' ','');
  let result = {};
  for (let i = 0; i < inputString.length; i++) {
    if (!result[inputString[i]]) {
      result[inputString[i]] = 0;
    }
    result[inputString[i]] += 1;
  }
  return result;
}
console.log(countCharOccurence2("Suraj Yadav"));


// via reduce fn of array
function charOfOcuurence3(inputString){
  inputString = inputString.toLowerCase();
  inputString = inputString.replaceAll(" ", "");
  let splittedString = inputString.split('');
  let result = splittedString.reduce((acc, char) => {
    if (!acc[char]){
      acc[char] =0;
    }
    acc[char] +=1;
    return acc;
  }, {})
  return result;
}
console.log(charOfOcuurence3("Suraj Yadav"));