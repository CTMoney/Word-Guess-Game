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

//Containers to print info into


//word pool + word blank
var words = ["celebration", "sweet", "establish", "leave", "disturbance", "building", "annual", "murder", "salesperson", "pastel", "agree",
    "allocation", "ecstasy", "sheet", "inspector", "multimedia", "earthflax", "air", "error", "coach"], wordBlank = "";

//guess array + current guess + incorrect guesses
var userGuesses = [], userGuess = "", incorrectGuesses = [];

//wins + losses + tries remaining
var losses = 0, wins = 0, tries = 15;

//Difficulty? add condition confirm + reset if confirm
var hard = () => { tries = 7 }, normal = () => { tries = 13 }, easy = () => { tries = 19 };

//document.ready equivalent for non jquery
document.addEventListener("DOMContentLoaded", function Start(event) {

    //I tried putting this in the global scope and it didn't work which is kind of amusing
    var feBlank = document.getElementById("blankW");

    // Choosing the word
    randomWord = words[Math.floor(Math.random() * words.length) + 0];

    // Generating a blank for user
    function genBlank() {
        for (i = 0; i < randomWord.length; i++) {
            wordBlank += "_ ";
        }
        document.getElementById("blankW").innerHTML = wordBlank;
    }
    genBlank();

    // when a key is pressed itll store it as userGuess in lower case
    // it will run function clicked which hits the visual button in the html 
    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();
    }

    function clicked(clicked_id) {
        //the different button clicks contained in switch function
        switch (clicked_id) {
            case "lQ":
                userGuess = "q";
                break;
            case "lW":
                userGuess = "w";
                break;
            case "lE":
                userGuess = "e";
                break;
            case "lR":
                userGuess = "r";
                break;
            case "lT":
                userGuess = "t";
                break;
            case "lY":
                userGuess = "y";
                break;
            case "lU":
                userGuess = "u";
                break;
            case "lI":
                userGuess = "i";
                break;
            case "lO":
                userGuess = "o";
                break;
            case "lP":
                userGuess = "p";
                break;
            case "lA":
                userGuess = "a";
                break;
            case "lS":
                userGuess = "s";
                break;
            case "lD":
                userGuess = "d";
                break;
            case "lF":
                userGuess = "f";
                break;
            case "lG":
                userGuess = "g";
                break;
            case "lH":
                userGuess = "h";
                break;
            case "lJ":
                userGuess = "j";
                break;
            case "lK":
                userGuess = "k";
                break;
            case "lL":
                userGuess = "l";
                break;
            case "lZ":
                userGuess = "z";
                break;
            case "lX":
                userGuess = "x";
                break;
            case "lC":
                userGuess = "c";
                break;
            case "lV":
                userGuess = "v";
                break;
            case "lB":
                userGuess = "b";
                break;
            case "lN":
                userGuess = "n";
                break;
            case "lM":
                userGuess = "m";
                break;

        }
        // if (userguess = "q") { console.log("HEYYY") }
    }

    //Reset Button
    function newWordWGG() {
        randomWord = words[Math.floor(Math.random() * words.length) + 0];
        userGuesses = [], userGuess = "", IncorrectGuesses = [], wordBlank = "";
        start();
    }
    //console.log("hello".includes("e"));

});

/*
var x = randomWord.indexOf(userGuess)

if randomWord.indexOf(userGuess) !== -1 
wordBlank.splice x=>userGuess
innerhtml = wordBlank;

if userGuess == -1 
incorrectGuesses.push=>x 
document.elementID(button).style => crossed-out
+ button disabled
tries--

if userGuess == special char
throwErr / ignore

if wordBlank == randomWord
wins++

if tries == 0
losses++
wordBlank = randomWord
*/