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
    let choice = prompt("What's your choice? (rock, paper, scissors)");
    return choice.toLowerCase();
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        return humanScore++;
    } else {
        return computerScore++;
    }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        return `You're a winner! 
        Your score: ${humanScore}
        Computer's score: ${computerScore}`;
    } else {
        return `You lose!
        Your score: ${humanScore}
        Computer's score: ${computerScore}`;
    }

}

console.log(playGame());