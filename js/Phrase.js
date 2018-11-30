class Phrase { //The class should include a constructor that accepts a phrase as an argument
    constructor(phrase) {
        this.phrase = phrase;
    }

    //this method adds letter placeholders to the display when the game starts
    //I need to dynamically create list items and append them to the div="phrase" in html file
    addPhraseToDisplay() {
        //I used the following video as a reference: https://www.youtube.com/watch?v=e0ihEHxd6vI

       //Create a reference to parent element
        const myList = document.getElementById('myList');

        //Crete new list items
        let newListItem = document.createElement('li');
        newListItem.textContent = ('my array needs to be here');

        //Give the li element a class name to hide them
        newListItem.className += 'hide letter';

        //Append the created li element to parent element
        myList.appendChild(newListItem);

       /*if the player matches a letter, the empty box is replaced with the matched letter
       I think I will have to call the showMatchedLetter when theres a match
       */   
      const player = document.getElementById('qwerty');
      //if the keyboard includes a value from the phrases array, then call showMatchedLetter()
        if(player.includes(this.phrases)) {
            this.showMatchedLetter();
        }
    }

    // this method checks to see if letter selected by player matches a letter in the phrase
    checkLetter() {
    const individualKeys = document.getElementById('key')
    if (individualKeys.includes(this.phrases)) {
        return true;
     } 
    }

    // the method below reveals the letter(s) on the board that matches player's selection.
    showMatchedLetter() {
        //if user input matches a value from the array, then display the letter on the board
        //if there was a match on the checkLetter method, then add a show letter class to the lis items
        if (individualKeys === true) {
            lettersLi.classList.add('show letter') //I used a code snipped from this source https://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element
        }
    }

}