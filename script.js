const getComputerChoice = () => {
    const randomNumber= Math.floor(3*(Math.random()))
    if (randomNumber <1){
        return "scissors"
    } else if (randomNumber <2){
        return "paper"
    } else {
        return "rock"
    }
}

const getHumanChoice = () => {
    const HumanChoice = prompt("Enter either Rock, Paper, or Scissors:")
    return HumanChoice.toLowerCase()
}

const playRound = (humanChoice, computerChoice) =>{
if((humanChoice === "rock" && computerChoice === "scissors")||(humanChoice === "scissors" && computerChoice === "paper")||(humanChoice === "paper" && computerChoice === "rock")){
    console.log(`You won!! ${humanChoice} beats ${computerChoice}`) 
    humanScore++
} else if ((humanChoice === "paper" && computerChoice === "scissors")||(humanChoice === "rock" && computerChoice === "paper")||(humanChoice === "scissors" && computerChoice === "rock")){
    console.log(`You lost!! ${humanChoice} is beaten by ${computerChoice}`) 
    computerScore++
} else {
    console.log(`You both picked ${humanChoice}. Score unchanged`)
}
console.log(`\nComputer:${computerScore} vs you:${humanScore}`)


}
let humanScore = 0
let computerScore = 0


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(humanSelection)
playRound(humanSelection,computerSelection)
