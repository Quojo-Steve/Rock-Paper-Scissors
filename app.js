const choices = ["rock", "paper", "scissors"];
const choicesimg = ["./img/rock.png", "./img/paper.png", "./img/scissors.png"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const yourchoice = document.querySelector(".yourchoice");
const computer_choice = document.querySelector(".computerchoice");
const results = document.querySelector(".results");
const you = document.querySelector(".you span");
const computer = document.querySelector(".computer span");

let winner;
let computerScore = 0;
let playerScore = 0;

rock.addEventListener("click", () => {
  const computerChoiceId = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[computerChoiceId];
  const computerChoiceImg = choicesimg[computerChoiceId];
  yourchoice.src = rock.getAttribute("src");
  computer_choice.src = computerChoiceImg;
  document.querySelector(".choices").style.display = "flex";
  if ("rock" === computerChoice) {
    winner = "Tie";
  } else if (computerChoice === "scissors") {
    winner = "Player wins";
    playerScore += 1;
  } else {
    winner = "Computer wins";
    computerScore += 1;
  }
  results.innerHTML = winner;
  you.innerHTML = playerScore;
  computer.innerHTML = computerScore;
});

paper.addEventListener("click", () => {
  const computerChoiceId = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[computerChoiceId];
  const computerChoiceImg = choicesimg[computerChoiceId];
  yourchoice.src = paper.getAttribute("src");
  computer_choice.src = computerChoiceImg;
  document.querySelector(".choices").style.display = "flex";
  if ("paper" === computerChoice) {
    winner = "Tie";
  } else if (computerChoice === "rock") {
    winner = "Player wins";
    playerScore += 1;
  } else {
    winner = "Computer wins";
    computerScore += 1;
  }
  results.innerHTML = winner;
  you.innerHTML = playerScore;
  computer.innerHTML = computerScore;
});

scissor.addEventListener("click", () => {
  const computerChoiceId = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[computerChoiceId];
  const computerChoiceImg = choicesimg[computerChoiceId];
  yourchoice.src = scissor.getAttribute("src");
  computer_choice.src = computerChoiceImg;
  document.querySelector(".choices").style.display = "flex";
  if ("scissors" === computerChoice) {
    winner = "Tie";
  } else if (computerChoice === "paper") {
    winner = "Player wins";
    playerScore += 1;
  } else {
    winner = "Computer wins";
    computerScore += 1;
  }
  results.innerHTML = winner;
  you.innerHTML = playerScore;
  computer.innerHTML = computerScore;
});
