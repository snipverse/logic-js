const prompt = require("prompt-sync")();

let userScore = 0;
let computerScore = 0;

function computerInput(value) {
  switch (value) {
    case 1:
      console.log("Computer chose Rock");
      break;
    case 2:
      console.log("Computer chose Paper");
    break;
    case 3:
      console.log("Computer chose Scissor");
      break;
    }
    return value;
  }
    
while(true){
  console.log(`\nHi dear, choose your fav option:
  1. Rock
  2. Paper
  3. Scissor
  4. Exit
  `);
    
let userInput = Number(prompt("Enter your choice: "));

if (userInput === 4) {
    console.log("Exiting game...");
    break;
  }

switch (userInput) {
  case 1:
    console.log("You chose Rock");
    break;
  case 2:
    console.log("You chose Paper");
    break;
  case 3:
    console.log("You chose Scissor");
    break;
  default:
    console.log("Invalid Input. Try again.");
    continue;
}
  
let random = Math.floor(Math.random() * 3) + 1;

let computerChoice = computerInput(random);

if (userInput === computerChoice) {
  console.log("The round is a draw");
} else if (
  (userInput === 1 && computerChoice === 3) ||
  (userInput === 2 && computerChoice === 1) ||
  (userInput === 3 && computerChoice === 2)
) {
  console.log("You won this round");
  userScore++;

} else {
  console.log("Computer won this round");
  computerScore++;
}
console.log(`Current Score -> You: ${userScore} | Computer: ${computerScore}`);
}

console.log("\nGame Over!");
console.log(`Final Score → You: ${userScore} | Computer: ${computerScore}`);

if (userScore > computerScore) {
  console.log("Congratulations! You won the game!");
} else if (computerScore > userScore) {
  console.log("Computer won the game!");
} else {
  console.log("The game ended in a draw!");
}
