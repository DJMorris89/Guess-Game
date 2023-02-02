const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const hintButton = document.getElementById("hintButton");
const resultMessage = document.getElementById("resultMessage");
const remainingAttempts = document.getElementById("remainingAttempts");

let winningNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 5;

guessButton.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultMessage.innerHTML = "Please enter a valid number between 1 and 100.";
  } else if (guess === winningNumber) {
    resultMessage.innerHTML = "You win!";
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else {
    remainingGuesses--;
    remainingAttempts.innerHTML = `Attempts remaining: ${remainingGuesses}`;
    if (remainingGuesses === 0) {
      resultMessage.innerHTML = "You lose.";
      guessInput.disabled = true;
      guessButton.disabled = true;
    } else {
      if (guess < winningNumber) {
        resultMessage.innerHTML = "Guess higher.";
      } else {
        resultMessage.innerHTML = "Guess lower.";
      }
    }
  }
});

resetButton.addEventListener("click", function() {
  winningNumber = Math.floor(Math.random() * 100) + 1;
  remainingGuesses = 5;
  remainingAttempts.innerHTML = "Attempts remaining: 5";
  guessInput.value = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  resultMessage.innerHTML = "";
});

hintButton.addEventListener("click", function() {
   let hint1 = winningNumber - 5;
   let hint2 = winningNumber;
   let hint3 = winningNumber + 5;
   let hint4 = winningNumber -10;
   let hint5 = winningNumber +10;
   resultMessage.innerHTML = `Hints: ${hint1}, ${hint2}, ${hint3}, ${hint4}, ${hint5} (one of these is the winning number)`;
 });


