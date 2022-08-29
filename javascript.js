function getComputerChoice() {
    const rocks = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let randomRPS = Math.random();

    if(randomRPS <= 0.33) {
        return rocks;
    } else if (randomRPS <= 0.67) {
        return paper;
    } else {
        return scissors;
    }
}
