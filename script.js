//prompt asking for user choice

function userPlays() {
    let userSelection = prompt("Make your selection: Rock, Paper, or Scissors?")
    if (userSelection === null || userSelection === "" || userSelection === undefined) {
        userPlays();
    }
    let choosenWeapon = userSelection.toLowerCase();
    return choosenWeapon;
}

let playerSelection = userPlays();

//function that choose the computer's weapon

const weapon = ['rock', 'paper', 'scissors'];

function computerPlays() {
    random = Math.floor(Math.random() * weapon.length);
    return weapon[random];
}

let computerSelection = computerPlays();

//winner counter

let winner = 0;
let loser = 0;

//match player and computer selection
//stores the winner

function playRound(playerSelection,computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        winner++;
        alert(`Your ${playerSelection} beat ${computerSelection}`);
        return winner;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winner++;
        alert(`Your ${playerSelection} beat ${computerSelection}`);
        return winner;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winner++;
        alert(`Your ${playerSelection} beat ${computerSelection}`);
        return winner;
    } else if (playerSelection === computerSelection) {
        alert("It's a tie!")
    }
     else {
        loser++;
        alert(`Your ${playerSelection} lose to ${computerSelection}`);
        return loser;
    }
}



//function for a 5 round game

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    if (winner > loser) {
        alert`Player won by ${winner} points`;
    } else {
        alert`Computer wins by ${loser} points`;
    }
}


console.log("player", playerSelection);
console.log("userplay function", userPlays());
console.log("computer", computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log("winner count", winner);
console.log("loser count", loser);