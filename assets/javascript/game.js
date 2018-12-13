//Pseudo
{/* 
Goals:
1. Create and store random word
2. When user guesses, store that guess
3. Print guess as either correct to proper index or incorrect to an array
4. Update Tries / Wins / Losses
5. Automatically start over once game ends
6. Reset button
7. Bonus - Difficulty settings
/Goals

Refactoring:
1. separating different "sections" with which I can..
2. condense functions where possible and then..
3. concat functions with variables 
/Refactoring
*/}

{//bonus
    //  var hard = () => { tries = 7 }, normal = () => { tries = 13 }, easy = () => { tries = 19 };
}

var losses = 0, wins = 0;
//push element out of randomWord
// Document.ready equivalent for non jquery
document.addEventListener("DOMContentLoaded", function start(event) {

    var words = ["celebration", "sweet", "establish", "leave", "disturbance", "building", "annual", "murder", "salesperson", "pastel", "agree",
        "allocation", "ecstasy", "sheet", "inspector", "multimedia", "earthflax", "air", "error", "coach"], wordBlank = " ";

    var userGuesses = [], userGuess = "", incorrectGuesses = [], tries = 13;

    document.getElementById("triesP").innerHTML = `Tries: ${tries}`;


    randomWord = words[Math.floor(Math.random() * words.length) + 0];
    randomCheck = randomWord;
    console.log(randomWord);

    function generateBlank() {
        for (i = 0; i < randomWord.length - 1; i++) {
            wordBlank += "_";
        }
        document.getElementById("blankW").innerHTML = wordBlank;
    }
    generateBlank();

    document.onkeyup = function (event) {

        userGuess = event.key.toLowerCase();
        var userGuessIndex = randomWord.indexOf(userGuess);


        if (randomWord.includes(userGuess)) {
            function updateBlank() {
                wordBlank = wordBlank.replace(wordBlank.charAt(userGuessIndex), userGuess);
                randomWord = randomWord.replace(wordBlank[userGuessIndex], '_');
                document.getElementById("blankW").innerHTML = wordBlank;
                console.log(randomWord);
            }
            updateBlank();

        }
        else if (!randomWord.includes(userGuess)) {
            function updateIncorrect() {
                incorrectGuesses.push(userGuess);
                document.getElementById("incorrectGuessP").innerHTML = incorrectGuesses;
                tries--;
                document.getElementById("triesP").innerHTML = `Tries: ${tries}`
            }
            updateIncorrect();

        }
        function winConditional() {
            if (tries > 0 && wordBlank == randomCheck) {
                wins++;
                document.getElementById("winsP").innerHTML = `Wins: ${wins}`;
                start();
            }
        }
        winConditional();

        function lossConditional() {
            if (tries == 0) {
                losses++
                wordBlank = randomWord;
                document.getElementById("lossesP").innerHTML = `Losses: ${losses}`
                document.getElementById("blankW").innerHTML = wordBlank;
                start();
            }
        }
        lossConditional();

    }

    // Full reset Button
    function resetWGG() {
        randomWord = words[Math.floor(Math.random() * words.length) + 0];
        userGuesses = [], userGuess = "", IncorrectGuesses = [], wordBlank = "", losses = 0, wins = 0, tries = 13;
        start();
    }

});

{//console.log("hello".includes("e"));
/* still to-do

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

Bonus -Visual click on physical click
    // clicked(`l${userGuess.toUpperCase()}`);
    // console.log(`l${userGuess.toUpperCase()}`);
*/

  // // Win conditional
    // if (tries > 0 && wordBlank == randomWord) {
    //     wins++
    //     document.getElementById("winsP").innerHTML = `Wins: ${wins}`;

    // }
    // // Loss conditional
    // if (tries == 0) {
    //     losses++ 
    //     wordBlank = randomWord;
    //     document.getElementById("lossesP").innerHTML = `Losses: ${losses}`;
    // }

/* function clicked(clicked_id) {
//     // The different button clicks contained in switch function
//     switch (clicked_id) {
//         case "lQ":
//             userGuess = "q";
//             break;
//         case "lW":
//             userGuess = "w";
//             break;
//         case "lE":
//             userGuess = "e";
//             break;
//         case "lR":
//             userGuess = "r";
//             break;
//         case "lT":
//             userGuess = "t";
//             break;
//         case "lY":
//             userGuess = "y";
//             break;
//         case "lU":
//             userGuess = "u";
//             break;
//         case "lI":
//             userGuess = "i";
//             break;
//         case "lO":
//             userGuess = "o";
//             break;
//         case "lP":
//             userGuess = "p";
//             break;
//         case "lA":
//             userGuess = "a";
//             break;
//         case "lS":
//             userGuess = "s";
//             break;
//         case "lD":
//             userGuess = "d";
//             break;
//         case "lF":
//             userGuess = "f";
//             break;
//         case "lG":
//             userGuess = "g";
//             break;
//         case "lH":
//             userGuess = "h";
//             break;
//         case "lJ":
//             userGuess = "j";
//             break;
//         case "lK":
//             userGuess = "k";
//             break;
//         case "lL":
//             userGuess = "l";
//             break;
//         case "lZ":
//             userGuess = "z";
//             break;
//         case "lX":
//             userGuess = "x";
//             break;
//         case "lC":
//             userGuess = "c";
//             break;
//         case "lV":
//             userGuess = "v";
//             break;
//         case "lB":
//             userGuess = "b";
//             break;
//         case "lN":
//             userGuess = "n";
//             break;
//         case "lM":
//             userGuess = "m";
//             break;

//     }
//     let x = randomWord.indexOf(userGuess);
//     if (randomWord.includes(userGuess)) {
//         function updateBlank() {
//             wordBlank = wordBlank.replace(wordBlank[x], userGuess);
//             document.getElementById("blankW").innerHTML = wordBlank;

//         }
//         updateBlank();
//     }
//     else if (!randomWord.includes(userGuess)) {
//         function updateIncorrect() {
//             incorrectGuesses = incorrectGuesses.push(userGuess);
//             document.getElementById("incorrectGuessP").innerHTML = incorrectGuesses;
//             tries--;
//             document.getElementById("triesP").innerHTML = `Tries: ${tries}`
//         }
//         updateIncorrect();

//     }
//     function winConditional() {
//         if (tries > 0 && wordBlank == randomWord) {
//             wins++
//             document.getElementById("winsP").innerHTML = `Wins: ${wins}`;
//         }
//     }
//     function lossConditional() {
//         if (tries == 0) {
//             losses++
//             wordBlank = randomWord;
//             document.getElementById("lossesP").innerHTML = `Losses: ${losses}`
//             document.getElementById("").innerHTML = wordBlank;
//         }
//     }
 } */}