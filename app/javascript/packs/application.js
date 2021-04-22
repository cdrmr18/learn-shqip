// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  document.getElementById("guess-submit").addEventListener('click', playGame);
  // document.getElementById("reset-game").addEventListener("click", initGame)
});

// Game logic
let phrase = "si je";
let guesses = [];

function playGame() {

  let guess = document.getElementById("vocab-guess").value.toLowerCase();

 displayResult(guess);
 saveHistory(guess);
 displayHistory();
}

function displayResult(guess) {
  if (guess == phrase){
    console.log("you're right")
  } else {
    console.log("you're wrong")
  }
}

function saveHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let i = guesses.length - 1;
  let list = "<ul>";
    
  while (i >= 0) {
    list += "<li>" + `${guesses[i]}` + "</li>";
    i--;
  }

  list += "</ul>"
  document.getElementById('history').innerHTML = list;
}

// function initGame() {

// }