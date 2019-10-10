/* create changing variables and arrays for programming languages to be guessed */
let wins = 0;
let losses = 0;
let attemptsLeft = 10;
let pastGuesses = [];
let underScores = [];
let correctLetters = [];

//sets an array of answers//
const answersArray = ["javascript", "html", "python", "java", "ruby"];

//this holds the place in the HTML document //
const directionsText = document.getElementById("directions-text");
const winsText = document.getElementById("winstext");
const lossesText = document.getElementById("lossestext");
const attemptsLeftText = document.getElementById("attemptslefttext");
let pastGuessesText = document.getElementById("pastguesstext");
let underScoreText = document.getElementById("underscores");
let correctLettersText = document.getElementById("underscores")


//defines the random work function and variable computerChoice//
let computerChoice = answersArray[Math.floor(Math.random() * answersArray.length)];
console.log(computerChoice);

//attempting to use split function that Tish suggested
let lettersArray = computerChoice.split("");


// generate undescores that appear in the webpage and can change based on the length of the word
let underscoresmaker = function () {
    for (let i = 0; i < lettersArray.length; i++) {
        underScores.push(" _ ");
        //the join function eliminates the ',' inbetween underscores
        underScoreText.textContent = underScores.join("");

    }
    return underScores;
}




console.log(underscoresmaker());
//IT WORKED!!!! THIS IS ME CELEBRTAING THE UNDERSCORES TUTORIAL I WATCHED ACTUALLY WORKED 
// NEED TO REPLACE UNDERSCORE
// need to inlcude onkey event that gathers user input
document.onkeyup = function (event) {
    let userGuess = event.key;
    // console.log(userGuess);
    //console.log(lettersArray);

    //this conditional states that if the users guess contains a character then it is valid//
    if ((lettersArray.includes(userGuess) === true)) {
        correctLetters.push(userGuess);
        // we now have a new array called correctLetters, which will include correct userGuess
        console.log(correctLetters);
        console.log(lettersArray);
        // I included this because i couldnt figure out how to replace the undescores and wanted somethign to appear
        correctLettersText.textContent = userGuess;



        // user inputs that do not contain a letter in an array
    } else if ((lettersArray.includes(userGuess) === false)) {
        attemptsLeft--;
        pastGuesses.push(userGuess);
        attemptsLeftText.textContent = "Attempts Left: " + attemptsLeft;
        pastGuessesText.textContent = "Guesses so Far: " + pastGuesses;
        console.log(pastGuesses);
    }
    if ((attemptsLeft == 0)) {
        confirm("That's All Folks! Better Luck Next Time, Let's Try Again!")
        location.reload();
    }
}
