class Game {
    constructor() {
        this.missed = 0; // this will be used as a counter for the amount of tries a player will get
        this.phrases = ["life is strange","success does not come easy", "seven swans", "guess the word", "wild goose chase"] 
    }

    //this method randomly retrieves one of the phrases stored in the phrases array.
    getRandomPhrase() { //I used a code snippet from this webiste https://medium.freecodecamp.org/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08
        //I made a variable and named it randomPhrase, I use the math floor and random methods to get a random whole number from the phrases array
        const randomPhrase = Math.floor(Math.random() * (phrases.length));
        console.log(randomPhrase);
    }

    /*this method checks to see if the button clicked by the player matches a letter in the phrase.
    If it does not, then call the removeLife() method..
    If the selected letter matches, call the showMatchedLetter() method on the phrase and 
    then call the checkForWin() method.
    */
    handleInteraction() {

    }

    /*this method removes a life, 
    removes a heart from the board, 
    and, if the player is out of lives, ends the game.*/
    removeLife() {

    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin() {

    }

    //this method displays a message if the player wins or a different message if they lose.
    gameOver() {

    }

    /* this method calls the getRandomPhrase() method,
 and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method. */
 startGame() {
     
 }
}