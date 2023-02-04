console.log('Welcome to a game of rock paper scissors');

const playerSelection = prompt("Rock / Paper / Scissors").toLowerCase();

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        return `Player wins. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        return `Player wins. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        return `Player wins. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    } else {
        return `Computer wins. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    }
}

function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

