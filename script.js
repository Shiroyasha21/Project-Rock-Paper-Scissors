
//function to run every match
function playRound() {
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return playCounter +=1;
    } else if (playerChoice == 'scissors' && computerChoice =='paper') {
        return playCounter +=1;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return playCounter +=1;
    } else if (playerChoice === computerChoice) {
        return tieCounter +=1;
    } else {
        return compCounter +=1;
    }
}

function playerChoice() {
    
}