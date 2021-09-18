// function computerPlay() generates "rock", "scissors" or "paper"
// function oneRound(playerSelection, computerSelection) return string of "You lose! Paper beats Rock"
//      parameters are case-insensitive
// function game() to play oneRound() 5 times and report the winner at the end
//      get user input with prompt
//      get computer input with computerPlay()

// returns string of either "rock", "scisors" or "paper"
function computerPlay() {
    let rsp = ["rock", "scissors", "paper"];
    let randnum = Math.floor(Math.random() * 3); // returns between 0-2

    return rsp[randnum];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    let rsp = ["rock", "scissors", "paper"];

    let playerScore, computerScore; //0-rock 1-scissors 2-paper [0 win 1, 1 win 2, 2 win 0]
    for (let i = 0; i < 3; i++) {
        if (rsp[i] == playerSelection) {
            playerScore = i;
        }
        if (rsp[i] == computerSelection) {
            computerScore = i;
        }
    }

    if (playerScore == 2 && computerScore == 0) {
        return 1;
    }
    else if (playerScore<computerScore){
        return 1;
    }
    else if (computerScore<playerScore){
        return 0;
    }
    else if (playerScore==computerScore){
        return 0.5;
    }
}

function game(){
    let playerScore=0,computerScore=0;
    for(let i=0;i<5;i++){
        userInput=window.prompt("Please enter your input", "scissors")
        playerScore+=oneRound(userInput,computerPlay());
        computerScore=5-playerScore;
    }
    
    console.log("Your Score: " + playerScore + "\nComputer Score: " + computerScore);
}
game();


