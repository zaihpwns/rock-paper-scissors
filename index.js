apiKey = "aslk1390uslknd10asdkbas3321dnaskid";

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisply = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let  computerScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if(playerChoice === computerChoice) {
        result = "IT'S A TIE!"
    }
    else {
        switch(playerChoice){
            case 'rock':
                result =(computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'paper':
                result =(computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissors':
                result =(computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerChoice}`
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`
    resultDisply.textContent = result;

    resultDisply.classList.remove('greenText', 'redText');

    switch(result) {
        case "YOU WIN!":
            resultDisply.classList.add('greenText');
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisply.classList.add('redText');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}