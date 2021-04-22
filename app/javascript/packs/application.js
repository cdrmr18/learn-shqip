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
  "sentence": 'How are you?', 
  "meaning": 'si je?'
}, {
  "sentence": 'hello', 
  "meaning": 'përshëndetje'
}
];
let vocab_i = 0;
let sentence = vocabulary[vocab_i]["sentence"];
let phrase = vocabulary[vocab_i]["meaning"];
let guesses = [];
document.getElementById("sentence").innerHTML = sentence;

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
  let dialog = '<div class="bg-warning"><span><strong>Oops!</strong> 😱 Try again!</span></div>';
  document.getElementById('result').innerHTML = dialog;

}

function resultGameEnd() {
  let dialog = '<div class="bg-primary"><span><strong>Oops!</strong>End of game. Good work!</span></div>';
  document.getElementById('result').innerHTML = dialog;

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

function initGame() {
  guesses = [];
  document.getElementById('result').innerHTML = "";
  displayHistory();
  vocab_i++;
  if (vocab_i < vocabulary.length) {
    sentence = vocabulary[vocab_i]["sentence"];
    phrase = vocabulary[vocab_i]["meaning"];
    document.getElementById("sentence").innerHTML = sentence;
  } else {
    resultGameEnd();
  }
  
}
