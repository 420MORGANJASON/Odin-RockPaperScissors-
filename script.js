// console.log("Hello world")

function getComputerChoice() {
    let randomNum = Math.random()

    if (randomNum < 1 / 3) {
        return "Computer Choice:Rock";
    } else if ( randomNum < 2 / 3) {
        return "Computer Choice:Paper";
    } else {
        return "Computer Choice:Scissors"
    }

    }
    function getHumanChoice() {
        let humanChoice = prompt(`Input Rock, Paper or Scissors......`)

        if( humanChoice === "Rock") {
            return "Human Choice:Rock"
        } else if ( humanChoice === "Scissors") {
            return "Human Choice:Scissors"
        } else if ( humanChoice === "Paper") {
            return "Human Choice:Paper" 
        } else {
            return "Sorry!The game only allows.Rock,Paper or Scissors.Try again!!!"
        }
            
    }
    console.log(getHumanChoice())
    

console.log(getComputerChoice())

