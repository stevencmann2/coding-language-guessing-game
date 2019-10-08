// create arrays for guesses
let wins = 0;
let losses = 0;
let guessesLeft = 5;
let pastGuessesArray = [];
const answersArray: ["javascript", "html", "python", "java", "c++"],

//this holds the place in the HTML document //

const directionsText = document.getElementById("directions-text");
const winsText = document.getElementById("winstext");
const lossesText = document.getElementById("lossestext");
const guessesLeftText = document.getElementById("guesseslefttext");
const pastGuessesText = document.getElementById("pastguesstext");
const vanishText = document.getElementById("vanish");



//Randomly chooses a choice from the questions array and will begin the game//
function gameOn() {
    // need to inlcude onkey event
    triviaCouples.onkeyup = function myScripe
    let computerQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    document.getElementById("gameontext").innerHTML = computerQuestion;
    console.log(computerQuestion);

    

// for this homework it doesnt need a lead in question, just ask them to guess the programming language your asking for//
// try and make it hang man like//









//document.onkeyup = function (event) {

// Determines which key was pressed.
//let userGuess = String.fromCharCode(event.keyCode).toLowerCase()


// console.log(computerChoice);

//hint the player as to the answer

//player should know how many characters the game is looking for


//number of attemps left

//wins and losses totals

// game needs to restart //