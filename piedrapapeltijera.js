function getComputerChoice() {
  const randomNum = Math.random();
// funcion getComputerChoice abarca lo que elige la maquina a traves de un numero aleatorio que se genera del 0 al 1
  if (randomNum < 0.33) {
    return "piedra";
  } else if (randomNum < 0.66) {
    return "papel";
  } else {
    return "tijeras";
  }
}

function getHumanChoice() {
  // funcion getHumanChoice
  const userChoice = prompt("¿piedra, papel o tijeras?");
  // abre una ventana que le pide al usuario que elija algo y el tiene que escribir una opcion
  return userChoice.toLowerCase(); //normaliza la minusculas evita errores por escribir mayusculas
}

function playGame() {
  // esta funcion activa el juego basicamente 
  // Puntajes iniciales declara el puntaje inicial de ambos jugadores en este caso en 0
  let humanScore = 0;
  let computerScore = 0;

  // Función para jugar una ronda
  function playRound(humanChoice, computerChoice) {
     const resultadoDiv = document.getElementById("resultado")
     let mensaje="";
    if (humanChoice === computerChoice) { //marca que si estan igualados el mensaje de abajo se ejecutara
      mensaje="Empate! Ambos eligieron " + humanChoice;
    } else if (
      (humanChoice === "piedra" && computerChoice === "tijeras") ||
      (humanChoice === "papel" && computerChoice === "piedra") ||
      (humanChoice === "tijeras" && computerChoice === "papel")
    ) { //marca las combinaciones por las que el humano podria ganar y ejecuta el mensaje de abajo, aparte le suma 1 un punto el ++
      mensaje="¡Ganás! " + humanChoice + " le gana a " + computerChoice;
      humanScore++;
    } else if (
      (computerChoice === "piedra" && humanChoice === "tijeras") ||
      (computerChoice === "papel" && humanChoice === "piedra") ||
      (computerChoice === "tijeras" && humanChoice === "papel")
    ) { //marca las combinaciones por las que la computadora podria ganarle al humano y ejecuta el mensaje de abajo, que perdiste y que la computadora suma 1 el ++
      mensaje="¡Perdés! " + computerChoice + " le gana a " + humanChoice;
      computerScore++;
    } else { //mensaje que ejecuta si el mensaje es mal escrito
     mensaje="Entrada inválida. Escribí piedra, papel o tijeras.";
    }
      // Mostrar resultado y puntaje
  resultadoDiv.innerHTML = `
    ${mensaje} <br>
    Puntaje → Humano: ${humanScore} | Computadora: ${computerScore}
  `;
  }} 
document.getElementById("piedra").addEventListener("click", () => {playRound("piedra") ;  } );
document.getElementById("tijera").addEventListener("click", () => {playRound("tijera") ;  } );
document.getElementById("papel").addEventListener("click", () => {playRound("papel") ;  } );
  // Mostrar resultado final
  if (humanScore >= 5 || computerScore >= 5) {
  resultadoDiv.innerHTML="\n--- Resultado final ---"; 
  if (humanScore > computerScore) { // si el puntaje es mayor al de la computadora ejecuta lo de abajo
    resultadoDiv.innerHTML +="🎉 ¡Ganaste el juego!";
  } else if (humanScore < computerScore) { // si el puntaje es menor al de la computadora ejecuta el codigo de abajo 
    resultadoDiv.innerHTML+="💻 La computadora ganó el juego.";
  } else {     // si el puntaje esta igualado ejecuta el codigo de abajo
    resultadoDiv.innerHTML="🤝 El juego terminó en empate.";
  }
}  // llama a la funcion y activa el juego
  playGame()
