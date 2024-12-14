const getComputerChoice = () => {
    const randomNumber= Math.floor(3*(Math.random()))
    if (randomNumber <1){
        return "Scissors"
    } else if (randomNumber <2){
        return "Paper"
    } else {
        return "Rock"
    }
}

const playRound = (humanChoice, computerChoice) =>{
if((humanChoice === "Rock" && computerChoice === "Scissors")||(humanChoice === "Scissors" && computerChoice === "Paper")||(humanChoice === "Paper" && computerChoice === "Rock")){
    result.innerText=`You won!! ${humanChoice} beats ${computerChoice}`
    humanScore++
} else if ((humanChoice === "Paper" && computerChoice === "Scissors")||(humanChoice === "Rock" && computerChoice === "Paper")||(humanChoice === "Scissors" && computerChoice === "Rock")){
    result.innerText=`You lost!! ${humanChoice} is beaten by ${computerChoice}` 
    computerScore++
} else {
    result.innerText=`You both picked ${humanChoice}. Score unchanged` 
}
para.innerText=`Computer :${computerScore} vs you: ${humanScore}`
result.appendChild(para);
return 
}

const playGame= () =>{
btnRock.addEventListener("click", ()=>{
    computerSelection = getComputerChoice();
    if(computerScore <5 && humanScore <5){
    playRound("Rock",computerSelection)
    } else {endgame()}})
btnPaper.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    if(computerScore <5 && humanScore <5){
    playRound("Paper",computerSelection)
    } else {endgame()}})
btnScissors.addEventListener("click",() => {
    computerSelection = getComputerChoice();
    if(computerScore <5 && humanScore <5){
    playRound("Scissors",computerSelection)
    } else {endgame()}})
}


const endgame= () => {
    if (humanScore === 5){
        result.innerText =`You won: ${humanScore} vs ${computerScore}`;
    }
    else if(computerScore === 5){ 
        result.innerText =`Computer won: ${computerScore} vs ${humanScore}`;
    }

}

let humanScore = 0
let computerScore = 0
let computerChoice = ""
const btnRock= document.querySelector(".rock-btn");
const btnPaper= document.querySelector(".paper-btn");
const btnScissors= document.querySelector(".scissors-btn");
const result= document.querySelector(".result");
const para = document.createElement("p");
playGame()

