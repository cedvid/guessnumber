function getRandomNum() {
    return Math.floor(Math.random() * 101);
}

let randomNum = getRandomNum();
let userNum = 0;
let guesses = 15;

function guessNum(randomNum, userNum) { 

    while (guesses > 0) {    
        userNum = parseInt(prompt("Guess the number between 1 and 100:", ""), 10);

        if (userNum > randomNum) {
        guesses--;
        let result = "Too high! Try again";
        result += "\n";
        result += `You have ${guesses} tries left`
        console.log(result);
        } else if (userNum < randomNum) {
        guesses--;
        let result = "Too low! Try again";
        result += "\n";
        result += `You have ${guesses} tries left`
        console.log(result);
        } else if (userNum === randomNum) {
        console.log(`Yes, it's ${randomNum}! \nWell done!`);
        }
    }   

    if (guesses == 0) {
        console.log(`Aw, the answer was ${randomNum}. Better luck next time.`)
    }

}

console.log(guessNum(randomNum, userNum));