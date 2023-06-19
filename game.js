var word = 'JUEGO';
var guessedWord = '';
for(var i = 0; i < word.length; i++) {
    guessedWord += '-';
}
document.getElementById('word').innerText = guessedWord;

function makeGuess() {
    var guess = document.getElementById('guess').value.toUpperCase();
    document.getElementById('guess').value = '';
    if(guess.length !== 1) {
        document.getElementById('message').innerText = 'Por favor, introduce solo una letra.';
        return;
    }
    var newGuessedWord = '';
    var correctGuess = false;
    for(var i = 0; i < word.length; i++) {
        if(word[i] === guess) {
            newGuessedWord += guess;
            correctGuess = true;
        } else {
            newGuessedWord += guessedWord[i];
        }
    }
    guessedWord = newGuessedWord;
    document.getElementById('word').innerText = guessedWord;
    if(correctGuess) {
        document.getElementById('message').innerText = '¡Correcto!';
    } else {
        document.getElementById('message').innerText = '¡Incorrecto!';
    }
    if(guessedWord.indexOf('-') === -1) {
        document.getElementById('message').innerText = '¡Ganaste!';
    }
}
