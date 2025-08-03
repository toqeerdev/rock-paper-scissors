function getComputerChoice(max) {
 let computerChoice = Math.floor(Math.random() * max);

 if (computerChoice === 0) {
    return "rock";
 }
 else if (computerChoice === 1) {
    return "paper";
 }
 else {
    return "scissors";
 } 
}


function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice: ", "Rock");
    return humanChoice;
}

function printResults(humanScore, computerScore) {
   if (humanScore > computerScore) {
      return "You won the game.\nYour score: " + humanScore + "." + "\nComputer score: " + computerScore + "."
   }
   else if (humanScore < computerScore) {
      return "You lost the game.\nYour score: " + humanScore + "." + "\nComputer score: " + computerScore + "."
   }
   else {
      return "The game is a tie.\nYour score: " + humanScore + "." + "\nComputer score: " + computerScore + "."
   }

}


function playGame() { 

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice(3)) {
   humanChoice = humanChoice.toLowerCase();

   if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats rock.");
      computerScore += 5;
   }
   else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats scissors.");
      humanScore += 5;
   }
   else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock.");
      humanScore += 5;
   }
   else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beat paper.");
      computerScore += 5;
   }
   else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats scissors.");
      computerScore += 5;
   }
   else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beat paper.");
      humanScore += 5;
   }
   else {
      console.log("It's a draw.");
   }
}

let humanScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {
playRound();
}

console.log(printResults(humanScore, computerScore));
}

playGame();
















  
