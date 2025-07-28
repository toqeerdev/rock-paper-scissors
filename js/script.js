function getComputerChoice() {
 let max = 3
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


const computerSelection = getComputerChoice();

