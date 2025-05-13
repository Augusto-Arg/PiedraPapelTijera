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
    let usuario= prompt("Elegi piedra papel tijera");
    console.log(usuario);
}