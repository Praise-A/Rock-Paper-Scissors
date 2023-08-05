let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");

let playerScore = 0;
let computerScore = 0;

//Computer Choice
const getComputerChoice = (selection) => {
  let randomSelection = selection[Math.floor(Math.random() * selection.length)];
  return randomSelection;
};

//Play Round
const playRound = (player, computer) => {
  if (player === "rock" && computer === "paper") {
    computerScore++;
    return "Paper covers Rock; Computer Wins";
  } else if (player === "paper" && computer === "scissors") {
    computerScore++;
    return "Scissors cuts Paper; Computer Wins";
  } else if (player === "scissors" && computer === "rock") {
    computerScore++;
    return "Rock breaks Scissors; Computer Wins";
  } else if (player === "rock" && computer === "scissors") {
    playerScore++;
    return "Rock breaks Scissors; You Win";
  } else if (player === "paper" && computer === "rock") {
    playerScore++;
    return "Paper covers Rock; You Win";
  } else if (player === "scissors" && computer === "paper") {
    playerScore++;
    return "Scissors cuts Paper; You Win";
  } else if (player === computer) {
    return "It's a tie! Play again";
  } else {
    return console.error();
  }
};

//Click Event Listeners
// rockBtn.addEventListener("onclick", assignValue("rock"));
// rockBtn.addEventListener("onclick",function assignValue("rock"));
rockBtn.addEventListener("click", () => assignValue("rock"));
paperBtn.addEventListener("click", () => assignValue("paper"));
scissorsBtn.addEventListener("click", () => assignValue("scissors"));

const assignValue = (playerSelection) => {
  const selection = ["rock", "paper", "scissors"];
  const computerSelection = getComputerChoice(selection);
  console.log(playRound(playerSelection, computerSelection));
  console.log(computerSelection);
  console.log(playerScore, computerScore);
};

//Game
const game = () => {
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
};

//Values
