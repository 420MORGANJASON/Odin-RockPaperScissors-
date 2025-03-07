// const prompt = require("prompt-sync")();
// initialize scores
let computerScore = 0;
let humanScore = 0;
let gameOver = false; 

// Select the buttons from HTML
const rockButton = document.querySelector("#btn1");
const paperButton = document.querySelector("#btn2");
const scissorsButton = document.querySelector("#btn3");
const container = document.querySelector(".choiceResult");
const scoreDisplay = document.querySelector(".score");
const result = document.querySelector(".final");
const restartButton = document.querySelector("#restartBtn")


// Initialize the choice variable
let choice;

function getComputerChoice() {
  const compChoice = Math.random();
  if (compChoice < 0.2) {
    return "rock";
  } else if (compChoice > 0.2 && compChoice < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice())

function getHumanChoice(choice) {
  if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
    return choice;
  } else {
    return "Invalid choice, try again!!";
  }
}
console.log(getHumanChoice());


// Logic to validate the inputs
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  container.textContent = `Human chose: ${humanChoice} and Computer chose: ${computerChoice}`;

  const lowerHumanChoice = humanChoice.toLowerCase(); 
  const lowerComputerChoice = computerChoice.toLowerCase(); 


  if (lowerHumanChoice === "Invalid choice, try again!") {
    console.log(lowerHumanChoice);
    return;
  }
  if (
    (lowerComputerChoice == "rock" && lowerHumanChoice == "scissors") ||
    (lowerComputerChoice == "scissors" && lowerHumanChoice == "paper") ||
    (lowerComputerChoice == "paper" && lowerHumanChoice == "rock")
  ) {
    computerScore++;
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}. Computer Wins!`;
    // console.log("Computer wins!");
  } else if (
    (lowerHumanChoice == "rock" && lowerComputerChoice == "scissors") ||
    (lowerHumanChoice == "scissors" && lowerComputerChoice == "paper") ||
    (lowerHumanChoice == "paper" && lowerComputerChoice == "rock")
  ) {
    humanScore++;
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}. Human wins!`;
    // console.log("Human wins!");
  } else if (lowerComputerChoice === lowerHumanChoice) {
    scoreDisplay.textContent = `That's a tie!`
    console.log("Thats a tie!");
    // No change in scores
  } else {
    scoreDisplay.textContent = `You loose this round`
    // console.log("You lose this round!");
  }
  console.log(
    `Human score is ${humanScore} and computer score is ${computerScore}`
  );
  if (humanScore + computerScore === 5) {
    announceWinner();
    gameOver = true; 
    disableButtons();
  }
}

rockButton.addEventListener("click", () => {
  if (!gameOver)
 playRound("Rock");
});
paperButton.addEventListener("click", () => {
  if (!gameOver)
  playRound("Paper");
});
scissorsButton.addEventListener(("click"), () => {
  if (!gameOver)
  playRound("Scissors")
})

// playRound();

function announceWinner() {
  if (humanScore > computerScore) {
    result.textContent = "Human wins the game!";
    } else if (computerScore > humanScore) {
      result.textContent = "Computer wins the game!";
    } else {
      result.textContent = "It's a tie!";
    }
  }


function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function restartGame() {
  computerScore = 0;
  humanScore = 0;
  gameOver = false;
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  result.textContent = "";
  container.textContent = "";
  enableButtons();
}

restartButton.addEventListener("click", restartGame);
scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
