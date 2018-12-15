


class Phrase { //The class should include a constructor that accepts a phrase as an argument
    constructor(phrase) {
        this.phrase = phrase; //This is the actual phrase the Phrase object is represented. This property should convert the phrase to all lower case
        console.log(this.phrase + " (this is the phrase brought from game.js");
        //this.letterCount; //this is number of letters inside the phrase (excluding spaces,punctuation,etc)
    }

    //this method adds letter placeholders to the display when the game starts
    //I need to dynamically create list items and append them to the div="phrase" in html file
    addPhraseToDisplay() {
        //I used the following video as a reference: https://www.youtube.com/watch?v=e0ihEHxd6vI

        //create a variable for this.phrase
        const phraseVariable = this.phrase;
        //this is the random phrase from game.js
        console.log(phraseVariable);
        //Use (forEach) to loop through the phrases array
        phraseVariable.forEach(element => {

            //Create a reference to ul element
            const myList = document.querySelector('#phrase ul');

            //Crete new list items
            let newListItem = document.createElement('li');

             //Append the created li element to ul element
            myList.appendChild(newListItem);

            //I set the context of the list items as element
            newListItem.textContent = element

            /*If the element parameter does not equal to a blank space then add a class named 'letter' located in css file,
             otherwise if there is a blank space then add a class called 'hide space'*/

            if (element !== ' ') {
               newListItem.className = 'letter';
           } else
            newListItem.className = 'hide space';
        });



     }

    /* this method checks to see if letter selected by player matches a letter in the phrase

        Use a loop to iterate the letters and check the phrase for whether the letter is in said phrase.
        if the letter is in the phrase,call the showMatchedLetter() method

        I used a code snippet from this source= https://stackoverflow.com/questions/53698897/i-am-having-trouble-converting-a-for-loop-to-a-foreach-loop/53698926#53698926
      */
     checkLetter(letter) {
         //this is the letter being clicked by the player
         console.log(letter + " (this is the letter typed by the player)");
        var letters = $('.letter');

        let foundLetter = false;
        letters.each((i, value) => {
        if ($(value).text() === letter) {
           console.log('this is true')

        foundLetter = true;
    }
  });
  return foundLetter;
}

    // the method below reveals the letter(s) on the board that matches player's selection.
    showMatchedLetter(letter) {
    //if there was a match on the checkLetter method, then add a show letter class

    //this works but all the letters show up instead of just the matched ones
    //  $('.letter').addClass('show letter');

        //grab letters and put them in a variable
      var compareLetters =  $('.letter');

        //I created a new game instance in order to access the array property for the loop below
const game = new Game()

     //give phrase array a variable to have a reference to it
     const phraseArray = game.phrases;
     console.log(phraseArray)

     /*use a each method to loop through the array of Phrase characters,
    and compare each char to the letter that was selected by the player.
    */
    phraseArray.each((i, compareLetters) => {
    if ($(compareLetters).text() === letter) {
        (this).addClass('show letter');
    }
        });
    
 }

}