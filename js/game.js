
const getComputerChoice = () => {
    let computerChoice = Math.random();
    //console.log(computerChoice);
    
    if (computerChoice >= 0 && computerChoice <=.32) {
        return "rock";
    }
    else if (computerChoice > .32 && computerChoice <=.66){
        return "paper";
    }
    else {
        return "scissors";
    }    
};

const getHumanChoice = () => {
    let humanChoice = prompt("Please enter rock, paper, or scissors");
    return humanChoice;
};


const playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    const playRound = (computerChoice, humanChoice) => {
        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === computerChoice) {
            return "It is a tie"
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return "You Win! Paper beats Rock!";
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You Win! Scissor beats Paper!";
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "You Win! Rock beats Scissors!";
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock!";
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return "You Lose! Scissor beats Paper!";
        }
        else {
            computerScore++;
            return "You Lose! Rock beats Scissors!";
        }
    };

    const getWinner = (humanFinalScore, computerFinalScore) => {
        if (humanFinalScore === computerFinalScore) {
            return "It is a tie";
        }
        else if (humanFinalScore > computerFinalScore) {
            return "Congratulations, you have won the game!";
        }
        else {
            return "Sorry, you have losed the game!";
        }
    };

    for (i =0 ; i< 5 ; i++) {
        let humanValue = getHumanChoice();
        console.log(`You entered ${humanValue}`);
        let computerValue = getComputerChoice();
        console.log(`Computer entered ${computerValue}`);
        console.log(playRound(computerValue, humanValue));
        console.log(`Your total score is ${humanScore}`);
        console.log(`Computer total score is ${computerScore}`);
        
    }

    console.log(getWinner(humanScore,computerScore));
    console.log(`Your final score is ${humanScore}`);
    console.log(`Computer final score is ${computerScore}`);
};

playGame();

/*
let humanValue = getHumanChoice();
console.log(humanValue);
let computerValue = getComputerChoice();
console.log(computerValue);
let winner = playRound(computerValue, humanValue);
console.log(winner);
console.log(humanScore);
console.log(computerScore);
*/
