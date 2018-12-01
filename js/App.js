/*-This file creates a new instance of the Game class, */
const game = new Game() 

//-adds event listeners for the onscreen keyboard 
// I used this piece of code as a referance: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
document.getElementById('qwerty').addEventListener("click", function(){
alert('you clicked the keyboard');
});

/*Add an event listener to the "Start Game" button which calls the resetDisplay() function,
 creates a new Game object, 
 and starts the game. */
document.getElementById('btn__reset').addEventListener("click", function(){
    resetDisplay();
});


//this function hides the start screen overlay.
function resetDisplay() {
    document.getElementById('overlay').style.display = 'none';
}

/*this function is called when a player selects a letter. 
It disables the button on the onscreen keyboard 
and calls the handleInteraction() method of the Game class.*/
function markButton() {
     //I used a code snippet from this source: https://stackoverflow.com/questions/39340798/how-to-disable-submit-button-after-click-single-time
    document.getElementsByClassName('key').setAttribute('disabled', 'disabled');
    game.handleInteraction();
}

game.startGame();


