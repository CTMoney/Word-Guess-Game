//Pseudo
{/* 
Goals:
1. When user guesses, store that guess
2. Create and store random word
3. Print and update user's 
4. Reveal letters as user guesses correctly
5. Update Tries / Wins / Losses
6. Automatically start over once game ends
/Goals

Refactoring:
1. Understanding different sections
2. condense functions where possible
3. concat functions with variables where possible
/Refactoring
*/}

//all required variables

//word pool + chosen word
var words = ["BitCrush"], randomWord = words[Math.floor(Math.random() * words.length) + 0];

//guess array + current guess
var userGuesses = [], userGuess = "";

//wins + losses + tries remaining
var losses = 0, wins = 0, tries = 15;

//Difficulty?
var hard = () => {tries = 7}, normal = () => {tries = 13}, easy = () => {tries = 19};


// The keyboard click needs to wrap the button click or the
// button click needs to wrap the keyboard click
// Both I need both!


// when a key is pressed itll store it as userGuess in lower case
// it will run function clicked which hits the visual button in the html 
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();    
}

function clicked(clicked_id) {
    //the different button clicks contained in switch function
    switch(clicked_id) {
        case "lQ":
        console.log("lQ")
        break;
        case "lW":
        console.log("lW")
        break;
        case "lE":
        console.log("lE")
        break;
        case "lR":
        console.log("lR")
        break;
        case "lT":
        console.log("lT")
        break;
        case "lY":
        console.log("lY")
        break;
        case "lU":
        console.log("lU")
        break;
        case "lI":
        console.log("lI")
        break;
        case "lO":
        console.log("lO")
        break;
        case "lP":
        console.log("lP")
        break;
        case "lA":
        console.log("lA")
        break;
        case "lS":
        console.log("lS")
        break;
        case "lD":
        console.log("lD")
        break;
        case "lF":
        console.log("lF")
        break;
        case "lG":
        console.log("lG")
        break;
        case "lH":
        console.log("lH")
        break;
        case "lJ":
        console.log("lJ")
        break;
        case "lK":
        console.log("lK")
        break;
        case "lL":
        console.log("lL")
        break;
        case "lZ":
        console.log("lZ")
        break;
        case "lX":
        console.log("lX")
        break;
        case "lC":
        console.log("lC")
        break;
        case "lV":
        console.log("lV")
        break;
        case "lB":
        console.log("lB")
        break;
        case "lN":
        console.log("lN")
        break;
        case "lM":
        console.log("lM")
        break;
        
    }
    // if (userguess = "q") { console.log("HEYYY") }
}


console.log(randomWord);

//     if (randomWord.toLowerCase().includes(userGuess)) {
//     }    
//     else if (randomWord.includes()) {
//     }