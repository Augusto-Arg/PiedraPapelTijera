function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 0.33) {
    return "piedra";
  } else if (randomNum < 0.66) {
    return "papel";
  } else {
    return "tijeras";
  }
}
console.log(getComputerChoice())
function getHumanChoice() {
  // Ask the user for their choice
  const userChoice = prompt("Rock, Paper, or Scissors?");
  // Normalize to lowercase
  return userChoice.toLowerCase();
}
console.log(getHumanChoice());