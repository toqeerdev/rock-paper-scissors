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

function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice: ", "rock");
    return humanChoice;
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


