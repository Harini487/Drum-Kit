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

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) { 

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

