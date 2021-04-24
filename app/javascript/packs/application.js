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
  document.getElementById("reset-game").addEventListener("click", initGame);
});

// Game logic

let vocabulary = [{
  "eng": 'How are you?', 
  "alb": 'si je?'
}, {
  "eng": 'hello', 
  "alb": 'përshëndetje'
}
];
let vocab_i = 0;
let eng = vocabulary[vocab_i]["eng"];
let phrase = vocabulary[vocab_i]["alb"];
let guesses = [];
document.getElementById("eng").innerHTML = eng;

function playGame() {
  let guess = document.getElementById("vocab-guess").value.toLowerCase();

  displayResult(guess);
  saveHistory(guess);
  displayHistory();
  document.getElementById("vocab-guess").value = "";
}

function displayResult(guess) {
  if (guess == phrase){
    resultWon();
  } else {
    resultWarning();
  }
}

function resultWon() {
  let dialog = '<div class="bg-success"><span><strong>Yay!</strong> 🎉 you got it!</span></div>';
  document.getElementById('result').innerHTML = dialog;
}

function resultWarning() {
  let dialog = '<div class="alert alert-warning" role="alert"><span><strong>Oops!</strong> 😱 Try again!</span></div>';
  document.getElementById('result').innerHTML = dialog;

}

function resultGameEnd() {
  let dialog = '<div class="alert alert-success" role="alert"><span><strong>Oops!</strong>End of game. Good work!</span></div>';
  document.getElementById('result').innerHTML = dialog;

}

function saveHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let i = guesses.length - 1;
  let list = "<ul class='list-group'>";
    
  while (i >= 0) {
    list += "<li class='list-group-item'>" + `${guesses[i]}` + "</li>";
    i--;
  }

  list += "</ul>"
  document.getElementById('history').innerHTML = list;
}

function initGame() {
  guesses = [];
  document.getElementById('result').innerHTML = "";
  displayHistory();
  vocab_i++;
  if (vocab_i < vocabulary.length) {
    eng = vocabulary[vocab_i]["eng"];
    phrase = vocabulary[vocab_i]["alb"];
    document.getElementById("eng").innerHTML = eng;
  } else {
    resultGameEnd();
  }
  
}
