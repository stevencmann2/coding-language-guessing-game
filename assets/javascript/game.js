// create arrays for guesses
let wins = 0;
let losses = 0;
let guessesLeft = 5;
let pastGuessesArray = [];
const computerLanguagesArray = ["Javascript", "HTML", "Python", "Java", "C++"];
const questionsArray = ["What behavioral programming language is being used to display this message?", 
                        "What programming language is used to make and design the layout of webpages?", 
                        "What is an interpreted, object-oriented, high-level programming language with dynamic semantics?", 
                        "Which language is a class-based, object-oriented promgramming language developed by Sun Microsystems in the 1990's?", 
                        "Which language was originally designed to enhance the C language?"]

//this holds the place in the HTML document //

const directionsText = document.getElementById("directions-text");
const winsText = document.getElementById("winstext");
const lossesText = document.getElementById("lossestext");
 

// Randomly chooses a choice from the options array. This is the Computer's guess.
const computerChoice = computerLanguagesArray[Math.floor(Math.random() * computerLanguagesArray.length)];

console.log(computerChoice);

//whenever a player hits a key//
document.onkeyup = function (event) {

    // Determines which key was pressed.
    let userGuess = event.key;
}






//hint the player as to the answer

//player should know how many characters the game is looking for


//number of attemps left

//wins and losses totals

// game needs to restart //