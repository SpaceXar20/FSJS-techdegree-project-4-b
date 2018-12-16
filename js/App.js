/*-This file creates a new instance of the Game class, */
const game = new Game()


/*Add an event listener to the "Start Game" button which calls the resetDisplay() function,
 creates a new Game object,
 and starts the game. */
 document.getElementById('btn__reset').addEventListener("click", function(){
    resetDisplay(); 
   
    
 })


//this function hides the start screen overlay.
function resetDisplay() {
    
    document.getElementById('overlay').style.display = 'none';
}

/*this function is called when a player selects a letter.
It disables the button on the onscreen keyboard
and calls the handleInteraction() method of the Game class.*/
function markButton(elem) {
    console.log(elem) + ' (this key was pressed from the keyboard)';
     //I used a code snippet from this source: https://stackoverflow.com/questions/39340798/how-to-disable-submit-button-after-click-single-time
     elem.attr('disabled', 'disabled'); 
     elem.addClass('chosen'); 
     game.handleInteraction(elem.text()); 
}

//-adds event listeners for the onscreen keyboard
// I used this piece of code as a referance: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
$('#qwerty button').on("click", function(e){
    markButton($(this));

    });

game.startGame();

//Allow player to use physical keyboard to guess letters, I used a snippet from here https://stackoverflow.com/questions/53798806/need-assistance-to-press-letters-from-keyboard?noredirect=1#comment94447687_53798806

/*The keypress event makes it so that when you press a key it will get the element with the id equal to the letter in the html file,
 and it will then run the markButton()*/
$(document).keypress(function(e) { 
    let key = String.fromCharCode(e.which); // e.which to get key code 
    if (/[A-Za-z]/.test(key)) { // is the key a letter/character 
    // If valid character, get the element key element using its id: 
    markButton($("#"+key.toLowerCase())); 
    } 
    });


    

