
        function getComputerChoice() {
            const rocks = "rock";
            const paper = "paper";
            const scissors = "scissors";

            let randomRPS = Math.random();

            if (randomRPS <= 0.33) {
                return rocks;
            } else if (randomRPS <= 0.67) {
                return paper;
            } else {
                return scissors;
            }
        }


        function playRound (computerSelection, playerSelection) {
            
            computerSelection = getComputerChoice();

            let getPlayerChoice = prompt("Choose one. Rock Paper Scissors", "");
            
            if (getPlayerChoice === null) {
                return "Nothing!!";
            }
            
            playerSelection= getPlayerChoice.toLowerCase();

            if (computerSelection === playerSelection) {
                return ("Tie it is");
            } else if (playerSelection === "rock" & computerSelection === "scissors") {
                return ("You win. Rock beats Scissors.");
            } else if (playerSelection === "rock" & computerSelection === "paper") {
                return ("You lose Paper beats Rock.");
            } else if (playerSelection === "paper" & computerSelection === "rock") {
                return ("You win. Paper beats Rock.");
            } else if (playerSelection === "paper" & computerSelection === "scissors") {
                return ("You lose Scissors beat Paper.");
            } else if (playerSelection === "scissors" & computerSelection === "rock") {
                return ("You lose Rock beats Scissors.");
            } else if (playerSelection === "scissors" & computerSelection === "paper") {
                return ("You win. Scissors beat Paper.");
            } else {
                return ("Spelling.")
            }
        }
        

        let initialPlayerCount = 0;
        let initialComputerCount = 0;

        for (i = 1; i <= Infinity ; i++) {
            roundResult1 = playRound();
            roundResult2 = roundResult1.slice(0,9);
            roundResult3 = roundResult1.slice(9);
            if (roundResult2 === "Nothing!!") {
                roundResult2 = "Choose something";
            } else if (roundResult2 === "Spelling.") {
                roundResult2 = "Check spelling & Choose right one.";
            }
        if (roundResult2 === "You win. ") {
            initialPlayerCount++;
            roundResult2 = "Point to Player.";
        } 
        if (roundResult2 === "You lose ") {
            initialComputerCount++;
            roundResult2 = "Point to Computer.";
        }
        if (roundResult2 === "Tie it is" ) {
            roundResult2 = "Tie.";
        }

        alert(roundResult3 + " " + roundResult2 + ` ${initialPlayerCount} : ${initialComputerCount}`);

        if (initialPlayerCount === 5) {
            break;
        } else if (initialComputerCount === 5) {
            break;
        }
    }


        if (initialPlayerCount > initialComputerCount) {
            alert("Player has won.");
        } else if (initialPlayerCount < initialComputerCount) {
            alert("Computer has won.")
        } else if (initialPlayerCount === initialComputerCount) {
            alert("Tied Game.");
        }

        alert("Thank you for Playing. Reload to Play Again");
