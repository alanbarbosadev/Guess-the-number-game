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

let randomNumber = Math.floor(Math.random() * 20);
let livesValue = 5;
lives.innerHTML = `Lives: ${livesValue}`;

/* events */

tryButton.addEventListener("click", guessNumber);
restartButton.addEventListener("click", restartGame);

/* functions */

function guessNumber(e) {
  //prevents the button from submitting
  e.preventDefault();
  //highlighting the hints spans according to the input number
  if (Number(guessInput.value) > randomNumber) {
    higherSpan.classList.remove("span-wrong");
    lowerSpan.classList.add("span-wrong");
    livesValue = livesValue - 1;
    lives.innerHTML = `Lives: ${livesValue}`;
    message.innerHTML = `Your last guess was ${guessInput.value}`;
    guessInput.value = "";
  } else if (Number(guessInput.value) < randomNumber) {
    lowerSpan.classList.remove("span-wrong");
    higherSpan.classList.add("span-wrong");
    livesValue = livesValue - 1;
    lives.innerHTML = `Lives: ${livesValue}`;
    message.innerHTML = `Your last guess was ${guessInput.value}`;
    guessInput.value = "";
  } else {
    higherSpan.classList.remove("span-wrong");
    lowerSpan.classList.remove("span-wrong");
    correctSpan.classList.add("span-correct");
    guessingNumber.innerHTML = `${randomNumber}`;
    lives.innerHTML = `Lives: ${livesValue}`;
    guessInput.value = "";
    guessInput.disabled = true;
    tryButton.disabled = true;
    document.body.style.backgroundColor = "#439C43";
    message.innerHTML = "Congratulations, you guessed it!";
  }
  //lose screen
  if (livesValue == 0) {
    document.body.style.backgroundColor = "#e3170a";
    higherSpan.classList.remove("span-wrong");
    lowerSpan.classList.remove("span-wrong");
    guessInput.disabled = true;
    tryButton.disabled = true;
    message.innerHTML = "Ops, you failed! Try again.";
  }
}

function restartGame(e) {
  //prevents the button from submitting
  e.preventDefault();
  //resets everything
  higherSpan.classList.remove("span-wrong");
  lowerSpan.classList.remove("span-wrong");
  correctSpan.classList.remove("span-correct");
  randomNumber = Math.floor(Math.random() * 20);
  livesValue = 5;
  lives.innerHTML = `Lives: ${livesValue}`;
  document.body.style.backgroundColor = "white";
  guessingNumber.innerHTML = `?`;
  guessInput.disabled = false;
  tryButton.disabled = false;
  message.innerHTML = "";
}
