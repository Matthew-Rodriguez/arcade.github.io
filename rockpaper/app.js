let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];  
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win.";
    
}
function lose(computerChoice, userChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = computerChoice + " beats " + userChoice + ". Computer wins.";

    
}
function draw(computerChoice, userChoice) {
    if(computerChoice === userChoice) {
        result_p.innerHTML = "You both picked " + userChoice + '. Draw.';
    console.log('DRAW');
}
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":   
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}


rock_div.addEventListener("click", function() {

    result_p.classList.add('show');
})

paper_div.addEventListener("click", function() {

    result_p.classList.add('show');
})

scissors_div.addEventListener("click", function() {

    result_p.classList.add('show');
})



function main() {
   rock_div.addEventListener("click", function() {
     game("Rock")
  })

   paper_div.addEventListener("click", function() {
     game("Paper")
})

   scissors_div.addEventListener("click", function() {
     game("Scissors")
  })
}

main();