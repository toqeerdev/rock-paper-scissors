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

function declareResults(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You won the game! Results are: " + "\nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game! Results are: " + "\nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);
    }
    else {
        console.log("The game is a tie. Results are: " + "\nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);
    }
}

function playGame() {

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

let humanScore = 0;
let computerScore = 0;

for (i = 0; i < 5; i++) {
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(humanSelection, computerSelection);
}

declareResults(humanScore, computerScore);
}

playGame();