function getComputerChoice() {
    const rocks = "rock";
    const paper = "paper";
    const scissors = "scissors";

    let randomRPS = Math.random();

    if(randomRPS <= 0.33) {
        return rocks;
    } else if (randomRPS <= 0.67) {
        return paper;
    } else {
        return scissors;
    }
}

function playRound (computerSelection, playerSelection) {
            
    computerSelection = getComputerChoice();
    console.log(computerSelection);

    let getPlayerChoice = prompt("Choose one. Rock Paper Scissors", "");
    
    if (getPlayerChoice === null) {
        return "Choose something";
    }
    
    playerSelection= getPlayerChoice.toLowerCase();
    console.log(playerSelection);

    if (computerSelection === playerSelection) {
        return ("It is a tie!");
    } else if (playerSelection === "rock" & computerSelection === "scissors") {
        return ("You win. Rock beats Scissors");
    } else if (playerSelection === "rock" & computerSelection === "paper") {
        return ("You lose. Paper beats Rock");
    } else if (playerSelection === "paper" & computerSelection === "rock") {
        return ("You win. Paper beats Rock");
    } else if (playerSelection === "paper" & computerSelection === "scissors") {
        return ("You lose. Scissors beat Paper");
    } else if (playerSelection === "scissors" & computerSelection === "rock") {
        return ("You lose. Rock beats Scissors");
    } else if (playerSelection === "scissors" & computerSelection === "paper") {
        return ("You win. Scissors beat paper");
    } else {
        return ("Check your spelling and Choose the right one.")
    }
}

alert(playRound());