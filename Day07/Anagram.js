// function isAnagram(inputStr1, inputStr2){
//   if(typeof inputStr1 !== "string" || typeof inputStr2 !== "string"){
//     throw new Error("Input type must be string.")
//   }
//   if (inputStr1.length !== inputStr2.length){
//     return false;
//   }
//   let sortedStr1 = inputStr1.split('').sort().join('');
//   let sortedStr2 = inputStr2.split('').sort().join('');
  
//   return sortedStr1 === sortedStr2;
// }
// console.log(isAnagram("sachin", "naschi"));

// method 2
// function isAnagram(inputStr1, inputStr2){
//   if(typeof inputStr1 !== "string" || typeof inputStr2 !== "string"){
//     throw new Error("Input type must be string.")
//   }
//   if (inputStr1.length !== inputStr2.length){
//     return false;
//   }
//   let splittedString1 = inputStr1.split('');
//   let sortedString1 = splittedString1.sort();

//   let splittedString2 = inputStr2.split('');
//   let sortedString2 = splittedString2.sort();

//   let result = true;

//   for (let i=0; i <sortedString1.length; i++){
//     if (sortedString1[i] !== sortedString2[j]){
//       result = false;
//     }
//   }
//   return result;
  
// }
// // console.log(isAnagram("sachin", "pal"));
// console.log(isAnagram("sachin", "chinsa"));
// console.log(isAnagram("sachin", "chinsp"));

// Method 3: through object and loops
function areAnagrams(str1, str2){
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("Input type must be string.");
  }
  if (str1.length !== str2.length) {
    return false;
  }
  const charInStr1 ={}
  for (let char of str1){
    // if (!charInStr1[char]){
    //   charInStr1[char] = 0;
    // }
    // charInStr1[char] += 1
    charInStr1[char] = (charInStr1[char] || 0) + 1; // short circuting:agr ye chr "charInStr1[char]" exist krta hai to usaki value le lena nhi to undifined dega, to us case me 0 de dena. our agar hai to usaki value leke + 1 kr dena.
  }

  const charInStr2 = {};

  for (let char of str2) {
    if (!charInStr2[char]) {
      charInStr2[char] = 0;
    }
    charInStr2[char] += 1;
  }

  for (let key in charInStr1) {
    if (charInStr1[key] !== charInStr2[key]) {
      return false;
    }
  }
  return true;
}
console.log(areAnagrams("night", "thing"));
console.log(areAnagrams("sachin","nichsa"));
console.log(areAnagrams("sachin", "chinsk"));
console.log(areAnagrams("sachin", "pal"));

