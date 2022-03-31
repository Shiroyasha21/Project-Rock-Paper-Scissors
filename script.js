let playerStage = document.getElementById("player");
let compStage = document.getElementById("computer");
let playerScore = document.getElementById("playerScore");
let compScore = document.getElementById("compScore");
let choices = document.querySelectorAll("button");
let results = document.getElementById("gameResults");

let plays = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let totalPlayerScore = 0;
let totalCompScore = 0;



choices.forEach(choice => {
    choice.addEventListener('click', e => {
        const playChoice = choice.dataset.key;

        registerChoice(playChoice);
        randomChoice(plays);
        playRound();
        gameLimit();
    })
});


function registerChoice(btnChoice) {
    playerChoice = btnChoice;

    if (playerChoice == "rock") {
        playerStage.textContent = "✊"
    } else if (playerChoice == "paper") {
        playerStage.textContent = "🖐"
    } else if (playerChoice == "scissors") {
        playerStage.textContent = "✌"
    }
}

function randomChoice(plays) {
    const random = Math.floor(Math.random() * plays.length);
    computerChoice = plays[random];

    if (computerChoice == "rock") {
        compStage.textContent = "✊"
    } else if (computerChoice == "paper") {
        compStage.textContent = "🖐"
    } else if (computerChoice == "scissors") {
        compStage.textContent = "✌"
    }
}

function playerWinResult() {
    totalPlayerScore++;
    playerScore.textContent = totalPlayerScore;
    results.textContent = `Your ${playerChoice} beats ${computerChoice}`
}

function computerWinResult() {
    totalCompScore++;
    compScore.textContent = totalCompScore;
    results.textContent = `The Computer beats your ${playerChoice}`
}

function tieResult() {
    results.textContent = "It's a tie! Choose again."
}

function playRound() {
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerWinResult();        
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerWinResult();        
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerWinResult();
    } else if (playerChoice === computerChoice) {
        tieResult();
    } else {
        computerWinResult();
    }
}

function gameLimit() {
    if (totalCompScore == 5) {
        results.textContent = "You Lose! Try again next time."
        gameOverPrompt();
    } else if (totalPlayerScore == 5) {
        results.textContent = "Congratulations! You win!"
        gameOverPrompt();
    }
}

function gameOverPrompt() {
    window.onload = setTimeout(function(){
        if(alert('Thank you for playing!')){}
        else    window.location.reload(); 
    }, 500);   
}

