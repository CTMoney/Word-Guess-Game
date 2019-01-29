
var words = ["celebration", "sweet", "establish", "leave", "disturbance", "building", "annual", "murder", "salesperson", "pastel", "agree",
"allocation", "ecstasy", "sheet", "inspector", "multimedia", "earthflax", "air", "error", "coach"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var losses = 0, wins = 0;
var incorrectGuesses = [], tries = 13, wordBlank = "";
var randomWord = words[Math.floor(Math.random() * words.length) + 0];

$(document).ready(function start(load_event) {

    $("#triesP").text(`Tries: ${tries}`), wordBlank = "";
    for (let i = 0; i < randomWord.length; i++) {
        wordBlank += "_";
    }
    $("#blankW").text(wordBlank);

    console.log(randomWord);

    $(document).keyup(function (event) {
        if (event.which >= 65 && event.which <= 90 && letters.includes(event.key.toLowerCase())) {

            var userGuess = event.key.toLowerCase();
            var wordIndex = randomWord.indexOf(userGuess);
            var lettersIndex = letters.indexOf(userGuess);

            if (wordIndex !== -1) {
                wordBlank = wordBlank.split("");

                for (let i = 0; i < randomWord.length; i++) {
                    if (randomWord[i] == userGuess) {
                        wordBlank[i] = userGuess;
                    }
                }

                wordBlank = wordBlank.join("");
                $("#blankW").text(wordBlank);
            }
            else if (wordIndex == -1) {
                tries--;
                $("#triesP").text(`Tries: ${tries}`);
                incorrectGuesses += userGuess;
                $("#incorrectGuessP").text(incorrectGuesses);
            }

            letters.splice(lettersIndex, 1);
        }
        else {
            console.log("enter an alphabetic character or a character you have not tried before!")
        }
        if (wordBlank == randomWord) {
            wins++ 
            $("#winsP").text(`Wins: ${wins}`);
            gameRestart();
        }
        else if (tries == 0) {
            losses++
            $("#lossesP").text(`Losses: ${losses}`);
            gameRestart();
        }
    }); 

    function gameRestart() {
        letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        incorrectGuesses = [], tries = 13;
        randomWord = words[Math.floor(Math.random() * words.length) + 0], wordBlank = "";
        $("#triesP").text(`Tries: ${tries}`);
        for (let i = 0; i < randomWord.length; i++) {
            wordBlank += "_";        }
        $("#blankW").text(wordBlank);
        $("#incorrectGuessP").text('');
        console.log(randomWord);
        
    }

});
