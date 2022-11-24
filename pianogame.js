const noteCounterImage = document.getElementById("note-counter-image");
//note counter image

const diamondCounterImage = document.querySelector("#diamond-counter-image");
// diamond counter image

const noteCount = document.querySelector("#note-count");
// note counter

const diamondCount = document.querySelector("#diamond-count");
// diamond counter

const currentSong = document.querySelector("#current-song");
// display current song

const songChoiceDisplay = document.querySelector("#song-choices");
// choose a song to play

noteCounterImage.setAttribute("src", "Exports/Musical Note.jpg");
// set note counter image

diamondCounterImage.setAttribute("src", "Exports/Diamond.jpg");

const playButton = document.getElementById("play-button");
// select play button

// redirect to game page
playButton.addEventListener("click", () => {
  location.href = "gamepage.html";
});

// set diamond counter image

// songChoice = [
//   "Canon in D - Dog Piano",
//   "G Minor  Bach - Dog Piano",
//   "First Snow",
// ];

// let songChoiceIds = [];

// for (let i = 0; i < songChoice.length; i++) {
//   songChoiceIds = songChoice[i];
//   console.log(songChoiceIds);
// }
