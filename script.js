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
    return +1
} else if ((humanChoice === "paper" && computerChoice === "scissors")||(humanChoice === "rock" && computerChoice === "paper")||(humanChoice === "scissors" && computerChoice === "rock")){
    console.log(`You lost!! ${humanChoice} is beaten by ${computerChoice}`) 
    return -1
} else {
    console.log(`You both picked ${humanChoice}. Score unchanged`)
}
}


const playGame= () =>{
let humanScore = 0
let computerScore = 0

for(let i=0;i<5;i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result=playRound(humanSelection,computerSelection)
    if (result===1){
        humanScore++
    } else if (result===-1){
        computerScore++
    }
    console.log(`Computer:${computerScore} vs you:${humanScore}`)
    console.log("game"+i)
}
}


playGame()
