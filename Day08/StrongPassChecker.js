// Using Regax
function isStrongPassword(inputString){
  if (typeof inputString !== "string"){
    throw new Error("Input should be in the String form.")
  }
  const regax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@]).{8,}$/;
  
  const test = regax.test(inputString);
  return test;
}
console.log(isStrongPassword("SachinPAL5"));
console.log(isStrongPassword("SachinPal@7777"));

// Without Regax
function isStrongPassword2(inputString){
  if (inputString.length < 8){
    return false;
  }
  const smallChar = "abcdefghijklmnopqrstuvwxyz";
  const capitalChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChar = "!@";

  let smallcharExits = false;
  let capitalcharExits = false;
  let numbersExits = false;
  let specialcharExits = false;

  for (let char of inputString){
    if (smallChar.includes(char)) {
      smallcharExits = true;

    } else if (capitalChar.includes(char)) {
      capitalcharExits = true;

    } else if (numbers.includes(char)) {
      numbersExits = true;

    } else if (specialChar.includes(char)) {
      specialcharExits = true;
    }
  }
  return smallcharExits && capitalcharExits && numbersExits && specialcharExits;
}
console.log(isStrongPassword2("sachipal"));
console.log(isStrongPassword2("sachipal@777"));
console.log(isStrongPassword2("Sachipal@777"));

