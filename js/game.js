
let humanScore = 0;
let computerScore = 0;

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

console.log(getHumanChoice());
console.log(getComputerChoice());