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

function getHumanChoice() {
  // Pedir elección del usuario
  const userChoice = prompt("¿piedra, papel o tijera?");
  // Normalizar a minúsculas
  return userChoice.toLowerCase();
}

function playGame() {
  // Puntajes iniciales
  let humanScore = 0;
  let computerScore = 0;

  // Función para jugar una ronda
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Empate! Ambos eligieron " + humanChoice);
    } else if (
      (humanChoice === "piedra" && computerChoice === "tijeras") ||
      (humanChoice === "papel" && computerChoice === "piedra") ||
      (humanChoice === "tijeras" && computerChoice === "papel")
    ) {
      console.log("¡Ganás! " + humanChoice + " le gana a " + computerChoice);
      humanScore++;
    } else if (
      (computerChoice === "piedra" && humanChoice === "tijeras") ||
      (computerChoice === "papel" && humanChoice === "piedra") ||
      (computerChoice === "tijeras" && humanChoice === "papel")
    ) {
      console.log("¡Perdés! " + computerChoice + " le gana a " + humanChoice);
      computerScore++;
    } else {
      console.log("Entrada inválida. Escribí piedra, papel o tijeras.");
    }
    console.log("Puntaje → Humano: " + humanScore + " | Computadora: " + computerScore);
  }

  // Jugar 5 rondas
  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Ronda ${i} ---`);
    const human = getHumanChoice();        // Pedir elección humana
    const computer = getComputerChoice();  // Elección aleatoria computadora
    playRound(human, computer);            // Llamamos a playRound
  }

  // Mostrar resultado final
  console.log("\n--- Resultado final ---");
  if (humanScore > computerScore) {
    console.log("🎉 ¡Ganaste el juego!");
  } else if (humanScore < computerScore) {
    console.log("💻 La computadora ganó el juego.");
  } else {
    console.log("🤝 El juego terminó en empate.");
  }
}
playGame();
