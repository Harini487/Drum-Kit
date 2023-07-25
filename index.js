/* alert("Hi"); */

//More on .addEventListener = https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//To Select the HTML button and add an event listener to listen when the button gets clicked and call the handleClick() function
//We add 2 parameters to it the "event type" and event listener (the JS function that's gonna be called when click event gets detected)

/* document.querySelector("button").addEventListener("click", handleClick); */ //This is for the 1st button

/* Notice above that the function (handleClick) doesn't have parenthesis, that's because when the HTML code gets to the script tag
if the parenthesis are there, the function will trigger as soon as the event listener is added. That's not what we want,
we want it to trigger when the click happens, therefore instead of calling the function where passing the name of the function
as an input. */

/* Usually most people will use Anonymous functions and pass it straight as an input

document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!"); 
  //Inside this is what to do when click detected.
}); */


//To add the click event for all the buttons with .drum class
/* var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
  });
}

function handleClick() {
  alert("I got clicked!"); //This will alert when a button gets clicked
} */

//Read the above note and codes carefully

//Detecting Button Press and Clicks

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //this - basically the identity of the button that triggered the event listener
    //see this by console.log(this) / console.log(this.innerHTML) - you get the assigned letter for each button class - w,a,s,d,j,k,l;
    
    this.style.color = "black"; //Whenever you click on a button it turns black with this code

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); //For the key pressed method


    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio('./sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio('./sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        var kick = new Audio('./sounds/kick-bass.mp3');
        kick.play();
        break;

      default: console.log(); //prints the buttoninnerHTML that triggered the default(if user inputs any other letter/ number, other than the above letters)
    }
    
  });
}

//The constructor function with the associated method(this.play) of the audio.play() code above (Audio is the name of the object)

/* function Audio (fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function() {
    //Tap into the audio hardeware
    //Check the file at fileLocation exists
    //Check the file at fileLocation is a sound file
    //Play the file at fileLocation
  }
} */

//Listening to the keyboard key presses instead of mouse clicks 

/* document.addEventListener("keydown", function() { //Gives an alert if any key is pressed
  alert("Key was pressed");
}); */


//Detecting Keyboard Press

document.addEventListener("keydown", function(event) { 
  //event is a parameter that taps into the event that triggered the event listener(basically the key that was pressed)
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
  //console.log(event);

  makeSound(event.key); //key property of the event
})

function makeSound(key) {
  
    switch (key) {
      case "w":
        var tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;

      case "j":
        var snare = new Audio('./sounds/snare.mp3');
        snare.play();
        break;

      case "k":
        var crash = new Audio('./sounds/crash.mp3');
        crash.play();
        break;

      case "l":
        var kick = new Audio('./sounds/kick-bass.mp3');
        kick.play();
        break;

      default: console.log(); //prints the buttoninnerHTML that triggered the default(if user inputs any other letter/ number, other than the above letters)
    }
    
}

