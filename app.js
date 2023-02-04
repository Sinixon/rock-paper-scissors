const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];
let askForInput = true;
let playerSelection;

console.log('Welcome to a game of rock paper scissors');

while (askForInput) {
   playerSelection = prompt("rock / paper / scissors").toLowerCase();
   for (let i = 0; i < ROCK_PAPER_SCISSORS.length; i++) {
       if (playerSelection === ROCK_PAPER_SCISSORS[i]) {
           askForInput = false;
       }
   }
}

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


   return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)];
}
