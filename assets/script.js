var words = [
    {
        word: "leprechaun",
        info: "those little buggers"
    },
    {
        word: "gold",
        info: "might find this under a rainbow"
    },
    {
        word: "green",
        info: "the color closely associated with Saint Patty's day"
    },
    {
        word: "whiskey",
        info: "Irish water"
    },
    {
        word: "irish",
        info: "The people who live in Ireland"
    },
    {
        word: "luck",
        info: "You may have this if you are irish"
    },
    {
        word: "rainbow",
        info: "What sits over a pot of gold?"
    },
    {
        word: "drinking",
        info: "People are doing this all day on St. Patty's day"
    },
    {
        word: "trinity",
        info: "Something"
    },
    {
        word: "parades",
        info: "Another Thing"
    },
    {
        word: "snakes",
        info: "whatever"
    },
    {
        word: "saint",
        info: "If you are associated with a miracle you can get this title from the Catholic Church"
    },
    {
        word: "clover",
        info: "If you find one of these with four leaves you may be lucky"
    },
    {
        word: "trinity",
        info: "HOW?"
    }];
var wordToDisplay = "";

//gameplay variables
var guessesRemaining = 9;
var wins = 0;
var losses = 0;
var guessedLetters = [];
var writtenText = "";
var classNameforHTML = "";

//available letters that could be selected
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];

//html element variables
var guesses = document.getElementById("guesses");
var guessed = document.getElementById("guessed");
var winning = document.getElementById("wins");
var losing = document.getElementById("losses");
var infoHTML = document.getElementById("info");
var blanksHTML = document.getElementById("blanks")

//writing guessed letters and guesses remaining to the html
guessed.innerHTML = guessedLetters;
guesses.innerHTML = guessesRemaining;

//reset game
function resetGame() {
    guessesRemaining = 9;
    guessedLetters = [];
    newWord();
    guessed.innerHTML = guessedLetters;
    guesses.innerHTML = guessesRemaining;
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    // checking if guesses are at 0    
    
    if (!guessesRemaining) {
        losses++;
        losing.innerHTML = losses;
        return resetGame();
        
    }

    //check if letter has been guessed yet

    if (guessedLetters.includes(userGuess)) {
        console.log("already tried that one")
    }

    //registering guess and scoring

    else {
        if (wordToDisplay.word.includes(userGuess)) {
            guessedLetters.push(userGuess);
            console.log(guessedLetters);
            guesses.innerHTML = guessesRemaining;
            guessed.innerHTML = guessedLetters;
            classNameforHTML = '"'+userGuess+'"'
            document.getElementsByClassName('"'+userGuess+'");
            
        }       
}
} 



//select a random word from the array
newWord();

function newWord() {
    console.log("Test");
    wordToDisplay = words[Math.floor(Math.random()*words.length)];
    console.log(wordToDisplay);
    
    //displaying the hint
    infoHTML.innerHTML = wordToDisplay.info;
    
    
    //displaying the dashes
    for (let i = 0; i < wordToDisplay.word.length; i++) {
        blanksHTML.innerHTML += '<a class='+wordToDisplay.word[i]+'> - </a>'
        
    }
}
