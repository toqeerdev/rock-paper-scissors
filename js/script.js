function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
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

function playRound(caseInsensitiveHumanChoice, computerChoice) {
    let humanChoice = caseInsensitiveHumanChoice.toLowerCase();
   
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore += 5;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore += 5;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper!");
        humanScore += 5;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore += 5;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper!");
        computerScore += 5;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore += 5;
    }
    else {
        console.log("It's a draw.")
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);

console.log(humanScore, computerScore);

