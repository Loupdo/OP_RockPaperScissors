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

const getHumanChoice = () => {
    
}


console.log(getComputerChoice())