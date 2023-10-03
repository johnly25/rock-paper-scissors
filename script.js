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
            return (`You win! ${playerSelection} beats ${computerSelection}.`)
        } else {
            return (`You lose! ${computerSelection} beats ${playerSelection}.`)
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return (`You win! ${playerSelection}  beats ${computerSelection}.`)
        } else {
            return (`You lose! ${computerSelection} beats ${playerSelection}.`)
        }
    } else {
        if (computerSelection == "paper") {
            return (`You win! ${playerSelection}  beats ${computerSelection}`)
        } else {
            return (`You lose! ${computerSelection} beats ${playerSelection}.`)
        }
    }
}
function checkScore(userScore, compScore) {
    if (userScore == 5) {
        return "YOU ARE WINNER"
    } else if (compScore == 5) {
        return "YOU ARE LOSER"
    }
    return ''
}

const btns = document.querySelectorAll('button');
btns.forEach(function (i) {
    i.addEventListener('click', function () {
        const selection = this.textContent;
        const result = playRound(selection, getComputerChoice());
        div.textContent = result;
        if (result.includes("win")) {
            userScore++;
        } else if (result.includes("lose")) {
            compScore++;
        }
        body.appendChild(div);
        userScoreDiv.textContent = "User Score: " + userScore;
        compScoreDiv.textContent = "Computer Score: " + compScore;
        body.appendChild(userScoreDiv);
        body.appendChild(compScoreDiv);

        resultDiv.textContent = checkScore(userScore, compScore);
        body.appendChild(resultDiv);

    });
});

const body = document.querySelector('body');
const div = document.createElement('div');
const userScoreDiv = document.createElement('div');
const compScoreDiv = document.createElement('div');
const resultDiv = document.createElement('div');
let userScore = 0;
let compScore = 0;

