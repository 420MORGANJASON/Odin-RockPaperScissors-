const prompt = require("prompt-sync")();

// initialize scores
let computerScore = 0;
let humanScore = 0;

// CREATE getComputerChoice function
// getComputerChoice randomly RETURN rock,paper,scissors
// IF compChoice  < 0.2,compChoice > 0.2 && compChoice < 0.6
// RETURN compChoice

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
// console.log(getComputerChoice())
// CREATE variable to ask and store humanChoice(Rock,Paper,Scissors) in any case.
// CREATE variable to store humanChoice and turn to lower case
// RETURN user choice
function getHumanChoice() {
  let humanChoice = String(prompt("Choose:Rock,Paper or Scissors......"));
  const choice = humanChoice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return "Invalid choice, try again!!";
  }
}
// console.log(getHumanChoice());


// Logic to play single round
function playRound(getComputerChoiceFunc, getHumanChoiceFunc) {
  let computerChoice = getComputerChoiceFunc();
  let humanChoice = getHumanChoiceFunc();

  console.log(`Computer chose: ${computerChoice}`);
  console.log(`Human chose: ${humanChoice}`);

  if (humanChoice === "Invalid choice, try again!") {
    console.log(humanChoice);
    return;
  }

  if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    computerScore++;
    console.log("Computer wins!");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    humanScore++;
    console.log("Human wins!");
  } else if (computerChoice === humanChoice) {
    console.log("Thats a tie!");
    // No change in scores
  }
  else {
    console.log("You lose this round!");
  }
  console.log(
    `Human score is ${humanScore} and computer score is ${computerScore}`
  );
}
playRound(getComputerChoice, getHumanChoice);
