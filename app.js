const ROCK_PAPER_SCISSORS = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerWins === 5) || (computerWins === 5)) {
        resetScoresAndText();
    }

    if ((playerWins === 0) || (computerWins === 0)) {
        document.getElementById("endOfGame").innerHTML = "";
    }

    let playerWinsText = `Player wins.<br><br> Player chose: ${playerSelection}<br>Computer chose: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        document.getElementById("result").innerHTML = `It's a draw.<br><br>Player chose: ${playerSelection}<br>Computer chose: ${computerSelection}`;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        playerWins++;
        document.getElementById("result").innerHTML = playerWinsText;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        playerWins++;
        document.getElementById("result").innerHTML = playerWinsText;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        playerWins++;
        document.getElementById("result").innerHTML = playerWinsText;
    } else {
        computerWins++;
        document.getElementById("result").innerHTML = `Computer wins.<br><br>Player chose: ${playerSelection} <br>Computer chose: ${computerSelection}`;
    }

    document.getElementById("playerCounter").innerHTML = playerWins;
    document.getElementById("computerCounter").innerHTML = computerWins;

    checkGameState();

}

function getComputerChoice() {
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)];
}

function checkGameState() {
    if (playerWins === 5) {
        document.getElementById("endOfGame").innerHTML = "Congratulations, you won! Click a button to restart.";
    }

    if (computerWins === 5) {
        document.getElementById("endOfGame").innerHTML = "Sorry, you lost. Click a button to restart.";
    }

}

function resetScoresAndText() {
    const playerScoreText = document.querySelector("#playerCounter");
    const computerScoreText = document.querySelector("#computerCounter");

    playerWins = 0;
    computerWins = 0;

    playerScoreText.textContent = playerWins;
    computerScoreText.textContent = computerWins;
}