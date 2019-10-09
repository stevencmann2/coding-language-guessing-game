/* create changing variables and arrays for programming languages to be guessed */
let wins = 0;
let losses = 0;
let attemptsLeft = 10;
let pastGuesses = [];
let underScores = [];
let correctLetters =[]

//sets an array of answers//
const answersArray = ["javascript", "html", "python", "java", "ruby"];

//this holds the place in the HTML document //
const directionsText = document.getElementById("directions-text");
const winsText = document.getElementById("winstext");
const lossesText = document.getElementById("lossestext");
const attemptsLeftText = document.getElementById("attemptslefttext");
let pastGuessesText = document.getElementById("pastguesstext");
let underScoreText = document.getElementById("underscores");


//defines the random work function and variable computerChoice//
let computerChoice = answersArray[Math.floor(Math.random()* answersArray.length)];
console.log(computerChoice);

//attempting to use split function that Tish suggested
let choiceWords = computerChoice.split("");

// generate undescores that appear in the webpage and can change based on the length of the word
let underscoresmaker = function() {
    for(let i = 0; i < choiceWords.length; i++){
        underScores.push(" _ ");
        underScoreText.textContent = underScores.join("");

    }
    return underScores;
    
} 

console.log(underscoresmaker());
//console.log(choiceWords);
//console.log(underscoresmaker());
//IT WORKED!!!! THIS IS ME CELEBRTAING THE UNDERSCORES TUTORIAL I WATCHED ACTUALLY WORKED 


    // need to inlcude onkey event that gathers user input
    document.onkeyup = function(event) {
       let userGuess = event.key;
      // console.log(userGuess);
       //console.log(choiceWords);

    //this conditional states that if the users guess contains a character then it is valid//
    if ((choiceWords.includes(userGuess) === true)) {
        correctLetters.push(userGuess);
        console.log(true);
        console.log(correctLetters);

       // underScores[choiceWords.indexOf(userGuess)]= correctLetters;
    } else if ((choiceWords.includes(userGuess) === false)) {
        pastGuesses.push(userGuess);
        attemptsLeft --;
        pastGuesses.push(userGuess)
        attemptsLeftText.textContent = "Attempts Left: " + attemptsLeft;
        pastGuessesText.textContent  = "Guesses so Far: " + pastGuesses;

        console.log(pastGuesses);
    }

}

// generate undescores that appear in the webpage and can change based on the length of the word

     //conditional statements
 
  
