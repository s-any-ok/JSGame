const $start = document.querySelector("#start");
const $game = document.querySelector("#game");
const $text = document.querySelector("#time");

let score = 0;
let isGameStarted = false;

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);

function startGame() {
  isGameStarted = true;
  $game.style.backgroundColor = "white";
  this.classList.add("hide");

  let interval = setInterval(function () {
    let time = parseFloat($text.textContent);
    if (time <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      $text.textContent = (time - 0.1).toFixed(2);
    }
  }, 100);

  renderBox();
}

function endGame() {
  isGameStarted = false;
}

function renderBox() {
  $game.innerHTML = "";
  let box = document.createElement("div");
  const boxSize = getRandom(30, 100);
  const gameSize = $game.getBoundingClientRect();
  const maxTop = gameSize.height - boxSize;
  const maxLeft = gameSize.width - boxSize;
  box.style.width = box.style.height = boxSize + "px";
  box.style.position = "absolute";
  box.style.backgroundColor = "#000";
  box.style.top = getRandom(0, maxTop) + "px";
  box.style.left = getRandom(0, maxLeft) + "px";
  console.log(maxTop, maxLeft);
  box.setAttribute("data-box", "true");
  $game.insertAdjacentElement("afterbegin", box);
}

function handleBoxClick(e) {
  if (!isGameStarted) {
    return;
  }
  if (e.target.dataset.box) {
    renderBox();
    score++;
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
