// write a program that simulates rolling a dice.
// input: 2 inputs: 1)no of dice , 2) no of sides in a dice
// output: array that contains result of rolling a dice.


const prompt = require('prompt-sync')();
const noOfDice = prompt("Enter no of dice: ");
const noOfSides = prompt("Enter no of Sides: ");

function rollingDice(noOfDice, sidesOfDice){
  let result = [];
  for (let i = 0; i < noOfDice; i++){
    let random = (Math.floor(Math.random() * sidesOfDice)) + 1;
    result.push(random)
  }
  return result;
}

console.log(rollingDice(noOfDice, noOfSides));