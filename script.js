let randomNum = Math.floor(Math.random() * 101);
let guesses = 10;
let guessCount = document.querySelector("#guessCount");
let result = document.querySelector(".result");
let clue = document.querySelector(".clue");
let guessButton = document.querySelector(".guessButton");
let guessInput = document.querySelector(".guessInput");
let playAgainButton;

function guessNum() { 
    const userNum = Number(guessInput.value);
    guesses--;

    if (userNum === randomNum) {
        result.textContent = `Yes, it was ${randomNum}! Well done!`;
        result.style.color = "green";
        clue.textContent = "";
        gameOver();
    } else if (guesses === 0) {
        guessCount.textContent = "0";
        result.textContent = `Aw, you had to guess ${randomNum}...Better luck next time.`;
        clue.textContent = "";
        gameOver();
    } else {
        guessCount.textContent = `${guesses}`;
        result.textContent = "That's wrong."
        result.style.color = "red";
        if (userNum > randomNum) {
            clue.textContent = `${userNum} is too high, you should try something else...`;
            } else if (userNum < randomNum) {
            clue.textContent = `${userNum} is too low! Come on, a bit higher!`;
            }
    }
    guessInput.value = "";
    guessInput.focus();
}

guessButton.addEventListener('click', guessNum);

function gameOver() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play again!";
    document.body.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", playAgain);
}

function playAgain() {
    guesses = 10;
    guessCount.textContent = "10";
    result.textContent = "";
    clue.textContent = "";
    playAgainButton.parentNode.removeChild(playAgainButton);
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = "";
    guessInput.focus();
    randomNum = Math.floor(Math.random() * 101);
}


