//returns rock paper or scissors
function getComputerChoice() {
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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection);
    if (playerSelection == computerSelection) {
        return ("It's a draw " + playerSelection + " is the same as " + computerSelection + ".");
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            return ("You win! rock beats scissor.");
        } else {
            return ("You lose! paper beats rock.");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ("You win! paper beats rock.");
        } else {
            return ("You lose! scissors beats paper.");
        }
    } else {
        if (computerSelection == "paper") {
            return ("You win! scissors beats paper.");
        } else {
            return ("You lose! rock beats scissors.")
        }
    }
}
function game() {
    let score = 0;
    //let playerSelection = prompt("What's your choice?");
    //let round = playRound(playerSelection, getComputerChoice());

/*     if (round.includes("win")) {
        score++;
    } else if (round.includes("lose")) {
        console.log("lose here");
        score--;
    }
    console.log(round);
    if (score > 0) {
        console.log("YOU ARE WINNER");
    } else if (score < 0) {
        console.log("YOU ARE LOSER");
    } else {
        console.log("It's a draw");
    } */
}

const btns = document.querySelectorAll('button');
btns.forEach(function (i) {
  i.addEventListener('click', function() {
    const selection = this.textContent;
    console.log(playRound(selection, getComputerChoice()));
  });
});

game();
