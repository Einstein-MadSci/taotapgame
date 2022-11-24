// const bestScore = document.querySelector("#best-score");

const movingBoxes = document.querySelectorAll(".moving-boxes");

const playGameButton = document.getElementById("play-button");

playGameButton.addEventListener("click", playGame);

const scoreDisplay = document.getElementById("best-score");

const scoreParagraph = document.querySelector(".paragraph-color");

let score = 0;

let gamePlayInterval;

let gameInProgress = true;

function playGame() {
  gameInProgress = true;
  scoreParagraph.textContent = "";
  score = 0;
  gamePlayInterval = setInterval(autoMoveSlabs, 1000);
  // console.log("gamePlayInterval at beginning is ", gamePlayInterval);
  // stopSlabs();
  // console.log("Button Clicked");
}

function autoMoveSlabs() {
  if (gameInProgress) {
    // movingBoxes.forEach(scoreCount);
    function scoreCount(movingBoxDiv) {
      // scoreParagraph.textContent = "";
      movingBoxDiv.addEventListener("click", function scoreCounter(e) {
        if (e.target.classList.contains("m2")) {
          score += 1;
          console.log("clicked blue");
        } else {
          // stopSlabs();

          scoreParagraph.textContent = `Game Over, your score is: ${score}`;
          gameInProgress = false;
          console.log("clicked purple");
          // movingBoxDiv.removeEventListener("click", scoreCounter);
          return;
        }
      });
    }

    const indexOfBoxToColor = Math.floor(Math.random() * movingBoxes.length);

    // const indexOfBoxToColor = 0;
    // console.log(indexOfBoxToColor); //random number
    let eligibleBox = movingBoxes[indexOfBoxToColor];
    for (let i = 0; i < movingBoxes.length; i++) {
      const boxElement = movingBoxes[i];
      if (boxElement.classList.contains("m2")) {
        changeBoxColorToPurpleIfBoxIsBlue(boxElement);
        let index = i + 1;
        if (index == movingBoxes.length) {
          index = 0;
        }

        break;
      }
    }

    colorTheNextEligibleBoxBlue(eligibleBox);
    // movingBoxes.forEach((upBox) => moveSlabs(upBox));

    // eligibleBox.addEventListener("click", );

    function colorTheNextEligibleBoxBlue(eligibleBox) {
      eligibleBox.classList.add("m2");
    }
  }

  function changeBoxColorToBlueIfPreviousBoxWasBlue() {}

  function changeBoxColorToPurpleIfBoxIsBlue(boxElement) {
    boxElement.classList.remove("m2");
    boxElement.classList.add("m1");
  }

  function stopSlabs() {
    console.log("game play int is", gamePlayInterval);
    clearInterval(gamePlayInterval);
    console.log("after clear interval, gamePlayInterval is", gamePlayInterval);
  }
}
