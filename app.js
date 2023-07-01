const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];
let playerSelection;
let playerWins = 0;
let computerWins = 0;

//console.log('Welcome to a game of rock paper scissors. You will be playing 5 games in total.');


function playRound(playerSelection, computerSelection) {
    let playerWinsText = `Player wins.<br><br> Player chose: ${playerSelection}<br>Computer chose: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        document.getElementById("result").innerHTML = `It's a draw.<br><br>Player chose: ${playerSelection}<br>Computer chose: ${computerSelection}`;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        playerWins++;
        document.getElementById("result").innerHTML = playerWinsText;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        playerWins++;
        document.getElementById("result").innerHTML = playerWinsText;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        playerWins++;
        document.getElementById("result").innerHTML = playerWinsText;              
    } else {
        computerWins++;
        document.getElementById("result").innerHTML = `Computer wins.<br><br>Player chose: ${playerSelection} <br>Computer chose: ${computerSelection}`;              
    }

    document.getElementById("playerCounter").innerHTML = playerWins;
    document.getElementById("computerCounter").innerHTML = computerWins;    
    
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
