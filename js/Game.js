const phrase = new Phrase
class Game {
    constructor() {
        this.missed = 0; // this property will be used as a counter for the total of 5 tries
        this.phrases = ["life is strange","success does not come easy", "seven swans swimming", "guess the word", "wild goose chase"];;
        this.activePhrase = null;

    }

    //This method should create and then return an array with 5 new Phrase objects.

    // createPhrases() {
    //     const phrase1 = new Phrase(this.phrases);

    //     return this.phrases
    // }

    //this method randomly retrieves one of the phrases stored in the phrases array.

    getRandomPhrase() { //I used a code snippet from this webiste https://medium.freecodecamp.org/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08

        //I made a variable and named it randomPhrase, I use the math floor and random methods to get a random whole number from the phrases array that I made on app.js
        const randomPhrase = this.phrases[Math.floor(Math.random() * (this.phrases.length))];
        console.log(randomPhrase);
        return randomPhrase.split('');

    }

    /*this method checks to see if the button clicked by the player matches a letter in the phrase.
    If it does not, then call the removeLife() method..
    If the selected letter matches, call the showMatchedLetter() method on the phrase and
    then call the checkForWin() method.
    */
    handleInteraction(e) {
        //console.log(e.target.innerHTML)
        /*if the player matched a letter, the checkforwin method will be called
        and the letter will be shown by calling showedMatchedLetter()
        */
        if (phrase.checkLetter(e) === true) {
            this.checkForWin();
            phrase.showMatchedLetter(e);

        } //if the player didn't match a letter, the game will remove a heart life by calling removelife method and add 1 to the missed property
          else {
              this.removeLife();
              this.missed  += 1;
          }
          
    }

    /*this method removes a life,
    removes a heart from the board,
    and, if the player is out of lives, ends the game.*/
    removeLife() {
        const hideLives = document.querySelector('#scoreboard .tries').style.display = 'none'; //this removes lives

        //if the player has 0 lives, call the gameOver method to end the game
        if (hideLives === 0) {
            this.gameOver();
        }
    }

    /*this method checks to see if the player has selected all of the letters.
    
    */

    checkForWin() {
        if (this.missed ===  5) {
            this.gameOver();
        }
    }

    //this method displays a message if the player wins or a different message if they lose.
    gameOver() {
        //if the player misses 5 times, display the game over mesage from index.html
        if (this.missed === 5) {
            document.getElementById('game-over-message').style.display = ""; //I used a code snippet from this source https://stackoverflow.com/questions/7420109/what-does-style-display-actually-do

        } else if (this.missed === 0) {
            document.getElementById('game-won-message').style.display = "";
        }

    }

    /* this method calls the getRandomPhrase() method,
 and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method. */
 startGame() {

//use a method to create new instances of the Phrase class
const phrase = new
 Phrase(this.getRandomPhrase());
      phrase.addPhraseToDisplay();
      return this.getRandomPhrase();
 }
}
