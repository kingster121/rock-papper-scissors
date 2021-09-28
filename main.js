// function computerPlay() generates "rock", "scissors" or "paper"
// function oneRound(e) is called when button is pressed
// global var playerPoint and computerPoint keeps track of who won
var playerPoint=0,computerPoint=0;
function computerPlay() {
    let rsp = ["rock", "scissors", "paper"];
    let randnum = Math.floor(Math.random() * 3); // returns between 0-2

    return rsp[randnum];
}

function oneRound(e) {
    let playerSelection=this.textContent.toLowerCase();
    let computerSelection=computerPlay().toLowerCase();
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
        playerPoint+=1;
    }
    else if (playerScore < computerScore) {
        playerPoint+=1;
    }
    else if (computerScore < playerScore) {
        computerPoint+=1;
    }
    else if (playerScore == computerScore) {
        playerPoint+=0.5;
        computerPoint+=0.5;
    }
    document.querySelector('#score').textContent=`Your score: ${playerPoint} Computer score: ${computerPoint}`;
    if(playerPoint>=5){
        alert("You won!");
        playerPoint=0;
        computerPoint=0;
    }
    if (computerPoint>=5){
        alert("You lost!");
        playerPoint=0;
        computerPoint=0;
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    const buttons=Array.from(document.querySelectorAll('.rsp-btn'));
    //console.log(buttons);
    buttons.forEach(button => button.addEventListener('click',oneRound));
}
game();

