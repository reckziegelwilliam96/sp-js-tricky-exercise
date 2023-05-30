function guessingGame(guess) {
    let range = range(0, 100);
    let answer = Math.ceil(Math.random(range));

    let gameOver = false;
    let count = 0;

    if (gameOver !== true){
        if (guess > answer) {
            count++;
            return `${guess} is too low`;
        } else if (guess < answer) {
            count++;
            return `${guess} is too high`;
        } else {
            count++;
            return `You win! You found ${answer} in ${count} guesses`;
        }
    } else {
        return "The game is over, you already won!"
    }
}

module.exports = { guessingGame };
