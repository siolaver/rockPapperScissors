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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === "scissors") {
        text.textContent = "Rock breaks the scissors!";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        text.textContent = "Oh! Your rock can't fight against the paper!";
        computerScore++;
    } else if (humanChoice === computerChoice) {
        text.textContent = "It's a tie!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        text.textContent = "Yes! Your paper locks rock down!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        text.textContent = "Your paper can't fight against the scissors!";
        computerScore++;
    } else if (humanChoice === computerChoice) {
        text.textContent = "It's a tie!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        text.textContent = "Yes! Your paper carve through paper!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        text.textContent = "Oh no! Your scissors are too weak!";
        computerScore++;
    } else if (humanChoice === computerChoice) {
        text.textContent = "It's a tie!";
    }
};
const oldTab = document.querySelector('.all');
const fButton = document.querySelector('.rock');
const sButton = document.querySelector('.paper');
const tButton = document.querySelector('.scissors');
const newTab = document.querySelector('.hidden');
const buttonPlayAgain = document.querySelector('#play');
const yourScore = document.querySelector('.yourScore');
const compScore = document.querySelector('.computerScore');
const text = document.querySelector('.text');
const textTwo = document.querySelector('.textTwo');
const audio = document.querySelector('.audio');
const audioCat = document.querySelector('.cat')

function first() {
    audio.play();
    if (humanScore + computerScore < 5) {
        playRound("rock", getComputerChoice());
        yourScore.textContent = `Your score: ${humanScore}`;
        compScore.textContent = `Computer score: ${computerScore}`;
    } else if (humanScore > computerScore) {
        textTwo.textContent = "YOU WIN!";
        oldTab.classList.add('hidden');
        newTab.classList.remove('hidden');
        audioCat.play();
    } else {
        textTwo.textContent = "YOU LOSE!";
        oldTab.classList.add('hidden');
        newTab.classList.remove('hidden');
        audioCat.play();
    }
}
function second() {
    audio.play();
    if (humanScore + computerScore < 5) {
        playRound("paper", getComputerChoice());
        yourScore.textContent = `Your score: ${humanScore}`;
        compScore.textContent = `Computer score: ${computerScore}`;
    } else if (humanScore > computerScore) {
        textTwo.textContent = "YOU WIN!";
        oldTab.classList.add('hidden');
        newTab.classList.remove('hidden');
        audioCat.play();
    } else {
        textTwo.textContent = "YOU LOSE!";
        oldTab.classList.add('hidden');
        newTab.classList.remove('hidden');
        audioCat.play();
    }
}
function third() {
    audio.play();
    if (humanScore + computerScore < 5) {
        playRound("scissors", getComputerChoice());
        yourScore.textContent = `Your score: ${humanScore}`;
        compScore.textContent = `Computer score: ${computerScore}`;
    } else if (humanScore > computerScore) {
        textTwo.textContent = "YOU WIN!";
        oldTab.classList.add('hidden');
        newTab.classList.remove('hidden');
        audioCat.play();
    } else {
        textTwo.textContent = "YOU LOSE!";
        oldTab.classList.add('hidden');
        newTab.classList.remove('hidden');
        audioCat.play();
    }
}

function playAgain() {
    audio.play();
    humanScore = 0;
    computerScore = 0;
    text.textContent = "Let's play the game!";
    newTab.classList.add('hidden');
    oldTab.classList.remove('hidden');
}
fButton.addEventListener('click', first);
sButton.addEventListener('click', second);
tButton.addEventListener('click', third);
buttonPlayAgain.addEventListener('click', playAgain);