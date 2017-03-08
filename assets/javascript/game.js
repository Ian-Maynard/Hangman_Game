//Setup routines - Variable initialization 
function printTheWord(){
for (var i = 0; i <= (gameWord.length-1); i++) {
      var letterBtn = $("<button>");
          letterBtn.addClass("letter-button letter letter-button-color");
       letterBtn.attr("data-letter", 'gameWord[i]');
       letterBtn.text("gameWord[i]");
       $("#buttons").append(letterBtn);
      }
}

function disPlaytile(){
var printWord="", dispText= ""; 
var printLetter="*";	// Assign print character default
$("#buttons").empty(); // Clear the display area 

	for (var i = 0; i <= (gameWord.length-1); i++) {
 	 	   
      var letterBtn = $("<button>");
      	  printLetter="*";
          letterBtn.addClass("letter-button letter-button-color letter");
       

		if (guessAcc.indexOf(gameWord[i])!= -1) {     
			printWord=printWord+gameWord[i];
			printLetter=gameWord[i];
		   } // IF character in word, pass value to be displayed 


       	  letterBtn.attr("data-letter", printLetter);
       	  letterBtn.text(printLetter);
       	  $("#buttons").append(letterBtn);
       	  // Generate and display current character
      }
	      if (printWord==gameWord)  {
	      	dispText=" You are the Winner!"; 
	      	alert(dispText);
	      }
		  else {
			dispText="Not there yet! "+printWord+
	      	" and "+gameWord+" Don't MATCH!"; 
		  }  

 // Display Message
 }  // End disPlaytile 

var alphaBet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var theWords = ["gallows", "rope","criminal","raven","knot","trapdoor","levers","death","hoodwink","murder",
				"appeal","blindfold","shroud","corpse","grave","hangman","casket","warrant","hood","warden",
				"guard","judge","jury","coroner","autopsy","priest","solitary","sentence","scaffold"];

var gameWord = theWords[Math.floor(Math.random()* theWords.length)];
var userWins = 0, userLosses = 0;
var playGame = true;
var youWin   = false;
var youLose	 = false;
var guessAcc = "";
var tryCount = 10;

			disPlaytile();
			alert("You have "+ tryCount+ " guesses. Guess one letter at a time, starting NOW!");

			document.onkeyup = function() {
				// Get input
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase()

						//Validate: Is Alpha?
						if (alphaBet.indexOf(userGuess)== -1){
							alert("Please enter an alphabetic character.");
							return;
						} //Validate Alpha

						// Validate: Has this been entered before? 
						if (guessAcc.indexOf(userGuess)!= -1){
							alert("You entered "+userGuess+" already.");
							return;
						}//Validate : Entered before

						//Validate: correct guess 
						if (gameWord.indexOf(userGuess) != -1) {
						   // alert("Correct Guess!! Guess again!");
						   guessAcc=guessAcc+userGuess; //Accumulate correct guesses 
						   disPlaytile();
						   //Call Display routine
						   return;
						}
						else {
							 alert("WRONG!! You have "+tryCount+" tries left.");
							 tryCount--;
							 return;
							 } // GUESS INCORRECT
				}//End get and Validate input function
