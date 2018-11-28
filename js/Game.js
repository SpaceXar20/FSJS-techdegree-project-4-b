class Game {
    constructor() {
        this.missed = 0; // this property will be used as a counter for the total of 5 tries
        this.phrases = ["life is strange","success does not come easy", "seven swans swimming", "guess the word", "wild goose chase"] 
    }

    //use a method to create new instances of the Phrase class
    newPhraseInstance() {
         new Phrase
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
        /*if the player matched a letter, the checkforwin method will be called 
        and the letter will be shown
        */
        if (checkLetter ===true) {
            this.checkForWin();this.showedMatchedLetter();

        } //if the player didn't match a letter, the game will remove a heart life by calling removelife method
          else {
              this.removeLife();
          }

    }

    /*this method removes a life, 
    removes a heart from the board, 
    and, if the player is out of lives, ends the game.*/
    removeLife() {
        const hideLives = document.getElementById('tries').style.display = 'none'; //this removes lives
        if (checkLetter === false) {
            hideLives
        }


        //if the player has 0 lives, call the gameOver method to end the game
        if (missed === 0) {
            this.gameOver();
        }
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