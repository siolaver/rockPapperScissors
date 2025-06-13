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

let choice = prompt("What's your choice?");

function getHumanChoice(choice) {
    return choice.toLowerCase();
}

console.log(getHumanChoice(choice));

humanScore = 0;
computerScore = 0;