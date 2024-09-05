var drumCount = document.querySelectorAll(".drum").length;

//add an event listener using a loop to each .drum class button listening for a mouse click on the buttons.
for (var i = 0; i < drumCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var keyPressed = this.innerHTML;
    drumSounds(keyPressed);
    buttonAnimation(keyPressed);
  });
}
//add an event listener on the document listening for keyboard presses.
//the event calls our drumSounds function and passes the keyboard key that was pressed
document.addEventListener("keydown", function (event) {
  drumSounds(event.key);
  buttonAnimation(event.key);
});
//our drumSounds function passes the keyboard key and compares it to our switch statement. if (asdfjkl) is pressed, A sound will play!
function drumSounds(correctKey) {
  switch (correctKey) {
    case "a":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
