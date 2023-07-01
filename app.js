const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];
let playerSelection;
let playerWins = 0;
let computerWins = 0;

//console.log('Welcome to a game of rock paper scissors. You will be playing 5 games in total.');

game();
printWinner();

function playRound(playerSelection, computerSelection, round) {
    let playerWinsText = `Result of round ${round}: Player wins. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        return `Result of round ${round}: It's a draw. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        playerWins++;
        return playerWinsText;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        playerWins++;
        return playerWinsText;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        playerWins++;
        return playerWinsText;
    } else {
        computerWins++;
        return `Result of round ${round}: Computer wins. Player chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    }
}

function getComputerChoice() {
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)];
}

function game() {

    for (let i = 0; i < ROCK_PAPER_SCISSORS.length; i++) {
        if (playerSelection === ROCK_PAPER_SCISSORS[i]) {
            askForInput = false;
        }

        const computerSelection = getComputerChoice();


        console.log(playRound(playerSelection, computerSelection, i));
        console.log(`Score table: Player: ${playerWins} || Computer: ${computerWins}`);
    }
}

function printWinner() {
    console.log(`Final score table: Player: ${playerWins} || Computer: ${computerWins}`);
    if (playerWins > computerWins) {
        return console.log('The player won');
    } else if (playerWins < computerWins) {
        return console.log('The computer won');
    } else {
        return console.log('No winner could be determined due to a draw.');
    }
}
