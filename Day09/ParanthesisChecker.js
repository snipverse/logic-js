// Write a program that checks if a given string of parantheses is balanced and well-formed.
//input: A string
// output: // true if paranthesis is balanced, //false if parethesis is not balanced
//parantheses : []-> Square bracket, {}-> curly bracket, () -> circular bracket
// balanced: //1) every opening -> should have closing, 2)order must be correct
//example:  [{()}] -> balanced, {() -> not balanced., [{(})] -> not balanced
const paranthesis = {
  '{': '}',
  '[': ']',
  '(': ')'
}
// console.log(paranthesis['[']); // object lookup

function isBalancedParanthesis(inputString){
  let result = [];
  for (let char of inputString) {
    if (paranthesis[char]) {
      result.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      const lastOpeningParanthesis = result.pop();
      if (paranthesis[lastOpeningParanthesis] !== char) {
        return false;
      }
    }
  }
  return result.length === 0;
  // return true; // return true( but it should return false, but kyuki result me abhi bhi '{' ye ak element pada hai. KYUKI isake corresponding closing nhi mial, to hamne pop nhi kiya our ye khali nhi huaa. That means unbalanced.)

  // console.log(inputString)
}
console.log(isBalancedParanthesis("{()}"));
console.log(isBalancedParanthesis("{(})"));
console.log(isBalancedParanthesis("{()")); //now works correctly as this is unbalanced , so false.
