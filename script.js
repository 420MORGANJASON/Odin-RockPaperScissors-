// CREATE getComputerChoice function
// getComputerChoice randomly RETURN rock,paper,scissors
// IF compChoice

function getComputerChoice() {
  const compChoice = Math.random();
  if (compChoice < 0.2) {
    console.log("Rock");
  } else if (compChoice > 0.2 && compChoice < 0.6) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
  return compChoice;
}


console.log(getComputerChoice());
