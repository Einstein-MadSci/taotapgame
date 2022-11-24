const playButton = document.getElementById("play-button");

playButton.addEventListener("click", moveBox);

function moveBox() {
  let id = null;
  function myMove() {
    let elem = document.getElementById("moving-box");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }
  myMove();
}
