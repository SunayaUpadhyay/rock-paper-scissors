const gameKeys = {
    1 : "ROCK",
    2 : "PAPER",
    3 : "SCISSORS"
}

function computerPlay() {
    let compNum = Math.floor(Math.random() * 3) + 1;
    return gameKeys[compNum];
}

function playRound(player, computer) {
    let displayMessage = "";
    let winner = "";
    if (player == "ROCK" && computer == "SCISSORS") {
        displayMessage = "You win! Rock beats Scissors.";
        winner = "user";
    } else if (player == "SCISSORS" && computer == "ROCK") {
        displayMessage = "You lose! Rock beats Scissors.";
        winner = "computer";
    } else if (player == "PAPER" && computer == "SCISSORS") {
        displayMessage = "You lose! Scissors beats Paper";
        winner = "computer";
    } else if (player == "SCISSORS" && computer == "PAPER") {
        displayMessage = "You win! Scissors beats Paper";
        winner = "user";
    } else if (player == "ROCK" && computer == "PAPER") {
        displayMessage = "You lose! Paper beats Rock";
        winner = "computer";
    } else if (player == "PAPER" && computer == "ROCK") {
        displayMessage = "You win! Paper beats Rock";
        winner = "user";
    } else if (player == computer) {
        displayMessage = `Draw! Both of you selected ${computer}`;
    } else {
        displayMessage = "Error! You should type Rock, Paper or Scissors";
    }
    return [displayMessage, winner];
}


function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    let gameCounter = 0;

    while (gameCounter < 5) {
        let playerSelection = (prompt("Enter ROCK, PAPER or SCISSORS!")).toUpperCase();
        let computerSelection = computerPlay();
        let gameArr = playRound(playerSelection, computerSelection);
        if (gameArr[1] == "user") {
            playerCounter++;
        } else if (gameArr[1] == "computer") {
            computerCounter++;
        } else if (gameArr[1] == "") {
            gameCounter--;
        }
        gameCounter++;
        alert(gameArr[0]);
    }

    console.info("Round of five complete");
    alert("A round of five games finished. Click ok to see who won.")

    if (playerCounter > computerCounter) {
        alert("You Won!")
    } else if (playerCounter < computerCounter) {
        alert("You lost!")
    } else {
        alert ("It's a draw. Play again!")
    }
}
game();
 