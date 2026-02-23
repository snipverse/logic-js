const prompt = require("prompt-sync")();

const random = Math.floor(Math.random() * 100) + 1;
console.log("randome no:", random);
let playerInput = parseInt(prompt("Enter you input number: "))

while(playerInput != random){
  if (playerInput > random){
    if (playerInput - random > 5){
      console.log("too high")
    }
    else {
      console.log("your no. is high, but you are close")
    }
  }
  else {
    if (random - playerInput > 5) {
      console.log("too low");
    } else {
      console.log("your no. is low, but you are close");
    }
  }
  playerInput = prompt("Please guess again: ")
}
console.log("Congratulations", random)
