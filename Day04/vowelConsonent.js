function calculateVowelConsonent(inputString){
  inputString = inputString.replaceAll(" ", ""); // use replace(/ /g, '') (regax for replacing globel specing)
  inputString = inputString.toLowerCase();
  const vowel = "aeiou";
  const consonent = "bcdfghjklmnpqrstvwxyz"
  let vowelCount = 0;
  let consonentCount = 0;
  for(let i=0; i <= inputString.length - 1; i++){
    if(vowel.includes(inputString[i])){
      vowelCount++;
    }
    // else if(consonent.includes(inputString[i]))
    else if(/^[a-z]$/.test(inputString[i])) // same as above bt using regax.
    {
      consonentCount++;
    }
  }
  return { vowelCount, consonentCount };
}
console.log(calculateVowelConsonent("Sachin Pal"));
console.log(calculateVowelConsonent("Sachin Pal HUNN"));
console.log(calculateVowelConsonent("Sachin Pal HUNN123"));

