const phrase = new Phrase()
class Game {
    constructor() {
        this.missed = 0; // this property will be used as a counter for the total of 5 tries
        this.phrases = ["life is strange","success does not come easy", "seven swans swimming", "guess the word", "wild goose chase"];
        //this.activePhrase = null;

    }

    

    //this method randomly retrieves one of the phrases stored in the phrases array.

    getRandomPhrase() { //I used a code snippet from this website https://medium.freecodecamp.org/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08

        //I made a variable and named it randomPhrase, I use the math floor and random methods to get a random whole number from the phrases array stored on this.phrases property
        const randomPhrase = this.phrases[Math.floor(Math.random() * (this.phrases.length))];
        //this is the random generated phrase
        console.log(randomPhrase + ' (this is the random generated phrase)');
        return randomPhrase.split('');


    }

    /*this method checks to see if the button clicked by the player matches a letter in the phrase.
    If it does not, then call the removeLife() method..
    If the selected letter matches, call the showMatchedLetter() method on the phrase and
    then call the checkForWin() method.
    */
    handleInteraction(letter) {
        
        /*if the player matched a letter, the checkforwin method will be called
        and the letter will be shown by calling showedMatchedLetter()
        */
        if (phrase.checkLetter(letter) === true) {

            phrase.showMatchedLetter(letter);
            this.checkForWin();

        } //if the player didn't match a letter, the game will remove a heart life by calling removelife method and add 1 to the missed property
          else {
              this.removeLife();

          }

    }

    /*this method removes a life,
    removes a heart from the board,
    and, if the player is out of lives, ends the game.*/
    removeLife() {
        const hideLives = $('.tries'); //this removes lives

        this.missed += 1;

        //if the player has 0 lives, call the gameOver method to end the game
        if (this.missed < 5) {
          hideLives[0].remove()
        } else if (this.missed === 5) {
            this.gameOver();
          }


    }

    /*this method checks to see if the player has selected all of the letters.

    */

    checkForWin() {
        //phraseMatch is the length of the empty boxes
    const phraseMatch  = $('.letter').length;
    //match is the length of the displayed boxes with the class of show
    const match  = $('.letter.show').length;
    //if the length of the empty boxes is equal to the length of the displayed boxes then return true
      if (phraseMatch === match) {
        return true
      }

    }

    //this method displays a message if the player wins or a different message if they lose.
    gameOver() {
        //if the player misses 5 times, display the game over message from index.html
        if (this.missed === 5) {
            $('#game-over-message').text('Game Over You Lost'); //I used a code snippet from this source https://stackoverflow.com/questions/7420109/what-does-style-display-actually-do
            $('#overlay').show().addClass('lose a');
            $('#btn__reset').text('Try Again!!');
            
            
            
             
            

        } else if (this.checkForWin === true)  {
            $('#game-over-message').text('You won!');
            $('#overlay').show().addClass('win');
            $('#btn__reset').text('Try Again!');
           
            
             
        }

    }

    /* this method calls the getRandomPhrase() method,
 and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method. */
 startGame() {
// this.getRandomPhrase();
// phrase.addPhraseToDisplay();
// return this.getRandomPhrase();


//use a method to create new instances of the Phrase class
const phrase = new
 Phrase(this.getRandomPhrase());
      phrase.addPhraseToDisplay();
      return this.getRandomPhrase();
      
 }
}
