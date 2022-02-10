
const options = ["rock", "paper", "scissors"]
function computerPlay() {
    rand = Math.floor(Math.random()*3);
    return options[rand];
}

function playRps(playerSelect,compSelect) {
    //Initialize all inputs to lowercase strings for comparing
    player = playerSelect.toLowerCase();
    comp = compSelect.toLowerCase();
    //If Statement to compare strings
    if (player === comp) {

        return `You tied, You played ${player} and your opponent played ${comp}.`;
    }
    //lose cases checked next
    else if (player === "scissors" && comp === "rock") {
        return `Sorry you lose, You played ${player} and your opponent played ${comp}.`;
    }
    else if (player === "rock" && comp === "paper") {
        return `Sorry you lose, You played ${player} and your opponent played ${comp}.`;
    }
    else if (player === "paper" && comp === "scissors") {
        return `Sorry you lose, You played ${player} and your opponent played ${comp}.`;
    }
    //win cases assumed if no tie or loss
    else {
        return `Congrats you win! You played ${player} and your opponent played ${comp}.`;

    }
}

//Test Cases
//const playerSelection = "rock"
//const compSelection = computerPlay()
//console.log(playRps(playerSelection,compSelection));


function game() {
    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your selection between 'rock', 'paper', and 'scissors'.");
        let result = playRps(playerSelection, computerPlay()) ;
        console.log(result);
        //checking result substring & updating score
        if (result.includes('win')) {
            playerScore = ++playerScore;
        }
        else if (result.includes('lose')) {
            compScore = ++compScore;
        }
        //No score update in case of a tie;
        //Output Score 
        console.log(`It is currently round ${i+1} and the score is You: ${playerScore} Computer: ${compScore}.`)
    }


}

game()
