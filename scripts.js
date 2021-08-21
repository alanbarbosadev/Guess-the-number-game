/* DOM elements */

const restartButton = document.querySelector(".restart-button");
const guessingNumber = document.querySelector(".guessing-number");
const guessInput = document.querySelector(".guess-value");
const tryButton = document.querySelector(".try-button");
const message = document.querySelector(".message");
const lives = document.querySelector(".lives");
const higherSpan = document.querySelector(".higher");
const correctSpan = document.querySelector(".correct");
const lowerSpan = document.querySelector(".lower");

/* inicial values */

let randomNumber = Math.floor(Math.random() * 10);
let livesValue = 5;
lives.innerHTML = `Lives: ${livesValue}`;

/* events */

tryButton.addEventListener("click", guessNumber);
restartButton.addEventListener("click", restartGame);

/* functions */

function guessNumber(e) {
  //prevents the button from submitting
  e.preventDefault();
  //highlighting the hint spans according to the input number
  if (Number(guessInput.value) > randomNumber) {
    higherSpan.classList.remove("bg-secondary");
    lowerSpan.classList.add("bg-secondary");
    livesValue = livesValue - 1;
    lives.innerHTML = `Lives: ${livesValue}`;
    message.innerHTML = `Your last guess was ${guessInput.value}`;
    guessInput.value = "";
  } else if (Number(guessInput.value) < randomNumber) {
    lowerSpan.classList.remove("bg-secondary");
    higherSpan.classList.add("bg-secondary");
    livesValue = livesValue - 1;
    lives.innerHTML = `Lives: ${livesValue}`;
    message.innerHTML = `Your last guess was ${guessInput.value}`;
    guessInput.value = "";
  } else {
    higherSpan.classList.remove("bg-secondary");
    lowerSpan.classList.remove("bg-secondary");
    correctSpan.classList.add("bg-secondary");
    guessingNumber.innerHTML = `${randomNumber}`;
    lives.innerHTML = `Lives: ${livesValue}`;
    guessInput.value = "";
    guessInput.disabled = true;
    tryButton.disabled = true;
    message.innerHTML = "Congratulations, you guessed it!";
  }
  //lose screen
  if (livesValue == 0) {
    higherSpan.classList.remove("bg-secondary");
    lowerSpan.classList.remove("bg-secondary");
    guessInput.disabled = true;
    tryButton.disabled = true;
    message.innerHTML = "Ops, you failed! Try again.";
  }
}

function restartGame(e) {
  //prevents the button from submitting
  e.preventDefault();
  //resets everything
  higherSpan.classList.remove("bg-secondary");
  lowerSpan.classList.remove("bg-secondary");
  correctSpan.classList.remove("bg-secondary");
  message.classList.remove("bg-danger");
  randomNumber = Math.floor(Math.random() * 10);
  livesValue = 5;
  lives.innerHTML = `Lives: ${livesValue}`;
  guessingNumber.innerHTML = `?`;
  guessInput.disabled = false;
  tryButton.disabled = false;
  message.innerHTML = "";
}
