let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let winnerComment = document.querySelector("#winnerComment");
let computerComment = document.querySelector("#desc");
let overlay = document.querySelector(".overlay");
let restartBtn = document.querySelector("#restartBtn");
let finalMessage = document.querySelector("#finalMessage");

let pScore = document.querySelector("#playerScore");
let cScore = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

//Computer Choice
const getComputerChoice = (selection) => {
  let randomSelection = selection[Math.floor(Math.random() * selection.length)];
  return randomSelection;
};

//Play Round
const playRound = (player, computer) => {
  if (
    (player === "rock" && computer.toLowerCase() === "scissors") ||
    (player === "paper" && computer.toLowerCase() === "rock") ||
    (player === "scissors" && computer.toLowerCase() === "paper")
  ) {
    playerScore++;
    return "You Win";
  } else if (player === computer.toLowerCase()) {
    return "It's a tie!";
  } else {
    computerScore++;
    return "Computer Wins";
  }
};

//Click Event Listeners
// rockBtn.addEventListener("onclick", assignValue("rock")); are there any cases
// rockBtn.addEventListener("onclick",function assignValue("rock"));
rockBtn.addEventListener("click", () => assignValue("rock"));
paperBtn.addEventListener("click", () => assignValue("paper"));
scissorsBtn.addEventListener("click", () => assignValue("scissors"));
restartBtn.addEventListener("click", () => restartGame());

const assignValue = (playerSelection) => {
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }

  const selection = ["Rock", "Paper", "Scissors"];
  const computerSelection = getComputerChoice(selection);
  showWinner(playerSelection, computerSelection);
  computerComment.innerHTML = `Computer picked ${computerSelection}`;
  updateScores();
};

const showWinner = (a, b) => {
  winnerComment.innerHTML = playRound(a, b);
};

const updateScores = () => {
  pScore.innerHTML = playerScore;
  cScore.innerHTML = computerScore;
};

const endGame = () => {
  if (playerScore === 5) {
    overlay.style.display = "block";
    finalMessage.innerHTML = `You won ${playerScore} to ${computerScore}`;
  } else if (computerScore > playerScore) {
    overlay.style.display = "block";
    finalMessage.innerHTML = `You lost ${playerScore} to ${computerScore}`;
  }
};

const restartGame = () => {
  playerScore = 0;
  computerScore = 0;
  pScore.innerHTML = "0";
  cScore.innerHTML = "0";
  overlay.style.display = "none";
};
