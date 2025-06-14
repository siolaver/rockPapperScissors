function getComputerChoice() {
    computerGuess = Math.floor(Math.random() * 3);
    if (computerGuess === 1) {
        return "rock";
    }
    else if (computerGuess === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");
    return choice.toLowerCase();
}

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice == "paper"
    ) {
        return "Lucky man!";
    } else {
        return "You lose!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));