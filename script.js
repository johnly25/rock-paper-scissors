//returns rock paper or scissors
function getComputerChoice() {
    /*
    get random whole number 1 2 3 
    if 1 return rock 2 return paper 3 return scissors
    */
    let getChoice = Math.floor(Math.random() * (3) + 1);
    if (getChoice == 1) {
        return "rock";
    } else if (getChoice == 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    /* 
    make sure text is all lowercase on both prompts
    if someone picks rock and the other picks scissors rock wins
    if someone picks paper and the other rock then paper wins 
    if someone picks scissors and the other paper then scissors win
    if its the same then it's a draw 
    return the winner
     */
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return("It's a draw " + playerSelection + " is the same as " + computerSelection +".");
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            return("You win! rock beats scissor.");
        } else {
            return("You lose! paper beats rock.");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return("You win! paper beats rock.");
        } else {
            return("You lose! scissors beats paper.");
        }
    } else {
        if (computerSelection == "paper") {
            return("You win! scissors beats paper.");
        } else {
            return("You lose! rock beats scissors.")
        }
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();


function game() {
    for () {
        let playerSelection = prompt("What's your choice?");
        playRound(playerSelection,getComputerChoice());
    }

 
}

