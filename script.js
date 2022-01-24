//run a prompt to ask user about their selection
//the entered data is turn to lower case for functionality

let userData = prompt("Rock, Paper, or Scissors? Choose one: ");
let userSelection = userData.toLowerCase();


//run a function for computer to choose its own selection

const selection = ['rock', 'paper', 'scissors'];

function computerPlays() {
    const random = Math.floor(Math.random() * selection.length);
    return random[selection];
}

let computerSelection = computerPlays();

//both player and computer selection is match in a round
//check who won based on the game rules
//make tally on who wins

let playerTally = 0;
let computerTally = 0;


function playRound(userSelection, computerSelection) {
    if (userSelection === 'rock' && computerSelection === 'scissors') {
        alert(`You win! ${userSelection} beats ${computerSelection}`)
        playerTally++;
        return playerTally;
    } else if (userSelection === 'scissors' && computerSelection === 'paper') {
        alert(`You win! ${userSelection} beats ${computerSelection}`)
        playerTally++;
        return playerTally;
    } else if (userSelection === 'paper' && computerSelection === 'rock') {
        alert(`You in! ${userSelection} beats ${computerSelection}`)
        playerTally++;
        return playerTally;
    } else if (userSelection === computerSelection) {
        alert(`It's a tie!`)
    } else {
        alert(`You lose! Your ${userSelection} cannot beat ${computerSelection}`)
        computerTally++;
        return computerTally;
    }
}

console.log("player selection: ", userSelection);
console.log("computer selection: ", computerSelection);
console.log("player tally: ", playerTally);
console.log("computer tally: ", computerTally);

console.log(playRound(userSelection, computerSelection));


//create a function that run the match five times and announce the winner

