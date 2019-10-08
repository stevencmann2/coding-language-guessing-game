// create arrays for guesses
let wins = 0;
let losses = 0;
let guessesLeft = 5;
let pastGuessesArray = [];
const computerLanguagesArray = ["javascript", "html", "python", "java", "c++"];
const questionsArray = []
    questionsArray[0]="What behavioral programming language is being used to display this message?"; 
    questionsArray[1]="What programming language is used to make and design the layout of webpages?";
    questionsArray[2]="What is an interpreted, object-oriented, high-level programming language with dynamic semantics?"; 
    questionsArray[3]="Which language is a class-based, object-oriented promgramming language developed by Sun Microsystems in the 1990's?"; 
    questionsArray[4]="Which language was originally designed to enhance the C language?";


//this holds the place in the HTML document //

const directionsText = document.getElementById("directions-text");
const winsText = document.getElementById("winstext");
const lossesText = document.getElementById("lossestext");
const guessesLeftText = document.getElementById("guesseslefttext");
const pastGuessesText = document.getElementById("pastguesstext");
const vanishText = document.getElementById("vanish");
 

// Randomly chooses a choice from the options array. This is the Computer's guess. and will begin the game
function gameOn (){
    
    let computerQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    document.getElementById("gameontext").innerHTML = computerQuestion;
    console.log(computerQuestion);


}

 






//document.onkeyup = function (event) {

    // Determines which key was pressed.
    //let userGuess = String.fromCharCode(event.keyCode).toLowerCase()
    

   // console.log(computerChoice);

//hint the player as to the answer

//player should know how many characters the game is looking for


//number of attemps left

//wins and losses totals

// game needs to restart //