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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const resultadoDiv = document.getElementById("resultado");

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let mensaje = "";

    if (humanChoice === computerChoice) {
      mensaje = "Empate! Ambos eligieron " + humanChoice;
    } else if (
      (humanChoice === "piedra" && computerChoice === "tijeras") ||
      (humanChoice === "papel" && computerChoice === "piedra") ||
      (humanChoice === "tijeras" && computerChoice === "papel")
    ) {
      mensaje = "¡Ganás! " + humanChoice + " le gana a " + computerChoice;
      humanScore++;
    } else {
      mensaje = "¡Perdés! " + computerChoice + " le gana a " + humanChoice;
      computerScore++;
    }

    resultadoDiv.innerHTML = `
      ${mensaje} <br>
      Puntaje → Humano: ${humanScore} | Computadora: ${computerScore}
    `;

    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        resultadoDiv.innerHTML += "<br>🎉 ¡Ganaste el juego!";
      } else if (computerScore > humanScore) {
        resultadoDiv.innerHTML += "<br>💻 La computadora ganó el juego.";
      } else {
        resultadoDiv.innerHTML += "<br>🤝 El juego terminó en empate.";
      }

      // Opcional: deshabilitar botones al terminar el juego
      document.getElementById("piedra").disabled = true;
      document.getElementById("papel").disabled = true;
      document.getElementById("tijeras").disabled = true;
    }
  }

  // Event listeners **dentro** de playGame para que vean playRound y variables
  document.getElementById("piedra").addEventListener("click", () => playRound("piedra"));
  document.getElementById("papel").addEventListener("click", () => playRound("papel"));
  document.getElementById("tijeras").addEventListener("click", () => playRound("tijeras"));
}

// Llamá a playGame para iniciar todo
playGame();
