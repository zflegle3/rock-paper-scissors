
const options = ["rock", "paper", "scissors"]
function computerPlay() {
    rand = Math.floor(Math.random()*3);
    return options[rand];
}

function keepScore(bool) {
    if (bool === true) {
        let score = document.querySelector(".user-score");
        score.textContent = Number(score.textContent) + 1;
        console.log(score);
    }
    else {
        let score = document.querySelector(".comp-score");
        score.textContent = Number(score.textContent) + 1;
        console.log(score);
    }
}

function checkScore() {
    if (Number(document.querySelector(".user-score").textContent) >= 5 || Number(document.querySelector(".comp-score").textContent) >= 5) {
        return false;
    }
    else {
        return true;
    }
}

function playRps(playerSelect,compSelect) {
    //Check Score before playing
    if (checkScore() === false) {
        let userScore = document.querySelector(".user-score").textContent;
        let compScore = document.querySelector(".comp-score").textContent
        outputContent.textContent = `The game is over, Your score is ${userScore} and your opponent's score is ${compScore}. Refresh the page to play again.`
        return
    }
    //Initialize all inputs to lowercase strings for comparing
    player = playerSelect.toLowerCase();
    comp = compSelect.toLowerCase();
    //If Statement to compare strings
    if (player === comp) {
        outputContent.textContent = `You tied, You played ${player} and your opponent played ${comp}.`;
    }
    //lose cases checked next
    else if (player === "scissors" && comp === "rock") {
        outputContent.textContent = `Sorry you lose, You played ${player} and your opponent played ${comp}.`;
        keepScore(false);
    }
    else if (player === "rock" && comp === "paper") {
        outputContent.textContent = `Sorry you lose, You played ${player} and your opponent played ${comp}.`;
        keepScore(false);
    }
    else if (player === "paper" && comp === "scissors") {
        outputContent.textContent = `Sorry you lose, You played ${player} and your opponent played ${comp}.`;
        keepScore(false);
    }
    //win cases assumed if no tie or loss
    else {
        outputContent.textContent = `Congrats you win! You played ${player} and your opponent played ${comp}.`;
        keepScore(true);
    }
}

//Button Functionality
const outputContent = document.querySelector(".output");
console.log(outputContent);

//Rock
document.querySelector(".rock").addEventListener("click", (e) => {
    console.log(playRps("rock", computerPlay()));
});
//Paper
document.querySelector(".paper").addEventListener("click", (e) => {
    console.log(playRps("paper", computerPlay()));
});
//Scissors
document.querySelector(".scissors").addEventListener("click", (e) => {
    console.log(playRps("scissors", computerPlay()));
});
