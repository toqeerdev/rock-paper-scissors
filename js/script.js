function playRound(humanChoice, computerChoice) {
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
   else if (humanChoice === computerChoice) {
      console.log("It's a draw.");
   }
}


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

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);