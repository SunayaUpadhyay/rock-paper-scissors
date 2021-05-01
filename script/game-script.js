let playerCounter = 0;
let computerCounter = 0;
let gameCounter = 0;

const gameKeys = {
    1 : "ROCK",
    2 : "PAPER",
    3 : "SCISSORS"
}

// random generation of gameKeys.
function computerPlay() { 
    let compNum = Math.floor(Math.random() * 3) + 1;
    return gameKeys[compNum];
}


function updateCounter(winner) {
    if (winner == "user") {
        playerCounter++;
    } else if (winner == "computer") {
        computerCounter++;
    }
    gameCounter++;
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
        displayMessage = `Draw! Both of you selected ${computer[0] + computer.slice(1).toLowerCase()}`;
    } else {
        displayMessage = "Error! You should type Rock, Paper or Scissors";
    }
    return [displayMessage, winner];
}


const images = document.querySelectorAll("img");
let imageList = [...images];

imageList.forEach(image => {
    image.addEventListener('click', playGame)
});


let div = document.createElement('div');
div.setAttribute("id", "log-message");
let body = document.querySelector('body');
body.appendChild(div);

function playGame(e) {
    
    let player =  e.target.id.toUpperCase();
    let computer = computerPlay();
    
    let winnerArr = playRound(player, computer);
    console.log(winnerArr[0])
    let p = document.createElement('p');
    p.innerText = winnerArr[0]; 
    div.appendChild(p);
    
    updateCounter(winnerArr[1]);

    let userScore = document.querySelector("#user-score");
    userScore.textContent = playerCounter;
    let computerScore = document.querySelector("#computer-score");
    computerScore.textContent = computerCounter;

    if(gameCounter >= 5) {
        let title = document.createElement('h1');
        title.classList.add("final-message");
        body.innerHTML = "";

        if (playerCounter > computerCounter) {
            title.innerText = "Congratulations! You have won the round. Press any key to continue."
        } else if (computerCounter > playerCounter) {
            title.innerText = "You have lost the round to a computer. Press any key to continue"
        } else {
            title.innerText = "There has been a draw between you and the computer. Play again! Press any key to continue"
        }

        body.appendChild(title);
        document.addEventListener("keydown", () => {
            location.replace("../rock-paper-scissors/main-page.html")
        })
        
    }
}
