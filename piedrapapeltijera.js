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
  const userChoice = prompt("¿piedra, papel o tijera?");
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
    if (humanChoice === computerChoice) { //marca que si estan igualados el mensaje de abajo se ejecutara
      console.log("Empate! Ambos eligieron " + humanChoice);
    } else if (
      (humanChoice === "piedra" && computerChoice === "tijeras") ||
      (humanChoice === "papel" && computerChoice === "piedra") ||
      (humanChoice === "tijeras" && computerChoice === "papel")
    ) { //marca las combinaciones por las que el humano podria ganar y ejecuta el mensaje de abajo, aparte le suma 1 un punto el ++
      console.log("¡Ganás! " + humanChoice + " le gana a " + computerChoice);
      humanScore++;
    } else if (
      (computerChoice === "piedra" && humanChoice === "tijeras") ||
      (computerChoice === "papel" && humanChoice === "piedra") ||
      (computerChoice === "tijeras" && humanChoice === "papel")
    ) { //marca las combinaciones por las que la computadora podria ganarle al humano y ejecuta el mensaje de abajo, que perdiste y que la computadora suma 1 el ++
      console.log("¡Perdés! " + computerChoice + " le gana a " + humanChoice);
      computerScore++;
    } else { //mensaje que ejecuta si el mensaje es mal escrito
      console.log("Entrada inválida. Escribí piedra, papel o tijeras.");
    }
    console.log("Puntaje → Humano: " + humanScore + " | Computadora: " + computerScore); //muestra el puntaje 
  }

  // Jugar 5 rondas
  for (let i = 1; i <= 5; i++) { // let i es una variable que empieza en 1 por que queremos iniciar en la ronda 1, i <=5 aclara que mientras la variable i sea menor  o igual a 5 se seguira ejecutando y i++ le suma 1 cada vuelta  
    console.log(`\n--- Ronda ${i} ---`); //muestra la ronda en la que estamos la variable i marca en que ronda estaremos 
    const human = getHumanChoice();       // llama a la funcion y la guarda en esta variable constante para devolver lo que se escribio 
    const computer = getComputerChoice();  // llama a la funcion y la guarda en esta variable constante para devolver lo que se escribio
    playRound(human, computer);            // llama a play round y marca lo que eligieron los dos
  }

  // Mostrar resultado final
  console.log("\n--- Resultado final ---"); 
  if (humanScore > computerScore) { // si el puntaje es mayor al de la computadora ejecuta lo de abajo
    console.log("🎉 ¡Ganaste el juego!");
  } else if (humanScore < computerScore) { // si el puntaje es menor al de la computadora ejecuta el codigo de abajo 
    console.log("💻 La computadora ganó el juego.");
  } else {     // si el puntaje esta igualado ejecuta el codigo de abajo
    console.log("🤝 El juego terminó en empate.");
  }
}  // llama a la funcion y activa el juego
  playGame();
