"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score,
  highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const startGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};

startGame();

//Checking the secret number
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number 🚨");
  } else if (guess === secretNumber) {
    displayMessage("Correct 🎉");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   guess > secretNumber
      //     ? displayMessage("📉 Too high")
      //     : displayMessage("📈 Too low");
      displayMessage(guess > secretNumber ? "📉 Too high" : "📈 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  startGame();
});
