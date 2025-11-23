function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)
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

function getHumanChoice() {
    return prompt("Enter your choice: ");
}


const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;