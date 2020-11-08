const $start = document.querySelector("#start");
const $game = document.querySelector("#game");

let score = 0;

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);

function startGame() {
  $game.style.backgroundColor = "white";
  this.classList.add("hide");

  renderBox();
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
  if (e.target.dataset.box) {
    renderBox();
    score++;
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
