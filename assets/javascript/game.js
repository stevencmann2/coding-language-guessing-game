/* create changing variables and arrays for programming languages to be guessed */
let wins = 0;
let losses = 0;
let attemptsLeft = 10;
let pastGuessesArray = [];
//sets an array of answers//
const answersArray = ["javascript", "html", "python", "java", "ruby"];


//this holds the place in the HTML document //

const directionsText = document.getElementById("directions-text");
const winsText = document.getElementById("winstext");
const lossesText = document.getElementById("lossestext");
const attemptsLeftText = document.getElementById("attemptslefttext");
const pastGuessesText = document.getElementById("pastguesstext");
const vanishText = document.getElementById("vanish");


//defines the random work function and variable computerChoice//
let computerChoice = answersArray[Math.floor(Math.random()* answersArray.length)];
console.log(computerChoice);


    // need to inlcude onkey event that gathers user input
    document.onkeyup = function(event) {
       const userGuess = event.key;
       console.log(userGuess)
    }
    


    //conditional statements
 
   


   /* 
    console.log(computerChoice) function gameOn() {; */

