//run a prompt to ask user about their selection
//the entered data is turn to lower case for functionality
//make a function to so that a prompt will ask every start of the round

function playerSelection() {
    let userData = prompt("Rock, Paper, or Scissors? Choose one: ");
    if (userData === "" || userData === null) {
        alert("Please choose one and only one!")
        let userSelection = prompt("Rock, Paper, or Scissors? Choose one: ").toLowerCase();
        return userSelection;
    }
    let userDataSelected = userData.toLowerCase();
    return userDataSelected;
}


//run a function for computer to choose its own selection


const selection = ['rock', 'paper', 'scissors'];

function computerPlays() {
    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}



//both player and computer selection is match in a round
//check who won based on the game rule
//make tally on who wins

let playerTally = 0;
let computerTally = 0;
let tieTally = 0;

function playRound() {
    let playerData = playerSelection();
    let computerSelection = computerPlays();
    
    if (playerData == 'rock' && computerSelection == 'scissors') {
        playerTally++;
        alert(`You win! ${playerData} beats ${computerSelection}`)
        return playerTally;
    } else if (playerData == 'scissors' && computerSelection == 'paper') {
        playerTally++;
        alert(`You win! ${playerData} beats ${computerSelection}`)
        return playerTally;
    } else if (playerData == 'paper' && computerSelection == 'rock') {
        playerTally++;
        alert(`You win! ${playerData} beats ${computerSelection}`)
        return playerTally;
    } else if (playerData === computerSelection) {
        tieTally++;
        alert(`It's a tie!`)
        return tieTally;
    } else {
        computerTally++;
        alert(`You lose! Your ${playerData} cannot beat ${computerSelection}`)
        return computerTally;
    }
}

//create a function that run the match five times and announce the winner

function game() {
    for (i=0; i < 5; i++) {
        playRound();
    }
    if (tieTally > 0) {
        alert(`The game ends! You scored ${playerTally} points while your opponent got ${computerTally} points! There's a total of ${tieTally} ties in the game!`)
    } else {
        alert(`Game ends! You scored ${playerTally} while your opponent got ${computerTally}!`)
    }
}






game();

//console.log("Player selection: ", playerSelection());
//console.log("computer selection: ", computerPlays());







