function countWords(sentence) {
  sentence = sentence.trim();
  const splittedSentence = sentence.split(' ');
  const filteredSentence = splittedSentence.filter((element)=> element != '');
  return filteredSentence.length;
}
console.log(countWords("   HI, My name    is sachin pal.      "));
console.log(countWords("HI, ALL hope   you guys  are doing well   .  "));