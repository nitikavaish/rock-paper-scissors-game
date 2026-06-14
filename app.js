let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let resetBtn = document.querySelector("#reset-btn");

const genComputerChoice = () => {
  // rock [aper scissors
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};
const drawGame = () => {
  msg.innerText = "Game was Draw,Play Again";
  msg.style.backgroundColor = "rgb(25, 149, 156)";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compscore++;
    compScorePara.innerText = compscore;
  }
};

const playGame = (userChoice) => {
  // generate computer choice ->modular
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //paper scissors
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
const resetGame = () => {
  userscore = 0;
  userScorePara.innerText = userscore;
  compscore = 0;
  compScorePara.innerText = compscore;
  msg.innerText = "play your moves";
  msg.style.backgroundColor = "rgb(207, 115, 207)";
};
resetBtn.addEventListener("click", resetGame);
