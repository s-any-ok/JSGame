const $start = document.querySelector("#start");
const $game = document.querySelector("#game");
const $time = document.querySelector("#time");
const $result = document.querySelector("#result");
const $timeHeader = document.querySelector("#time-header");
const $resultHeader = document.querySelector("#result-header");
const $gameTime = document.querySelector("#game-time");

let score = 0;
let isGameStart = false;
let colors = [
  "green",
  "black",
  "gray",
  "pink",
  "yellow",
  "blue",
  "red",
  "brown",
  "cyan",
];

$start.addEventListener("click", startGame);
$game.addEventListener("click", handleBoxClick);
$gameTime.addEventListener("input", setGameTime);

function show($el) {
  $el.classList.remove("hide");
}

function hide($el) {
  $el.classList.add("hide");
}

function startGame() {
  score = 0;
  setGameTime();
  $gameTime.setAttribute("disable", "true");
  isGameStart = true;
  $game.style.backgroundColor = "white";
  hide(this);

  let interval = setInterval(function () {
    let time = parseFloat($time.textContent);

    if (time <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      $time.textContent = (time - 0.1).toFixed(2);
    }
  }, 100);
  renderBox();
}

function endGame() {
  isGameStart = false;
  $gameTime.removeAttribute("disable");
  setResultScore();
  show($start);
  $game.innerHTML = "";
  $game.style.backgroundColor = "#ccc";
  hide($timeHeader);
  show($resultHeader);
}

function setResultScore() {
  $result.textContent = score.toString();
}

function setGameTime() {
  let time = +$gameTime.value;
  $time.textContent = time;
  show($timeHeader);
  hide($resultHeader);
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
  box.style.backgroundColor = colors[getRandom(0, colors.length)];
  box.style.top = getRandom(0, maxTop) + "px";
  box.style.left = getRandom(0, maxLeft) + "px";
  box.setAttribute("data-box", "true");
  $game.insertAdjacentElement("afterbegin", box);
}

function handleBoxClick(e) {
  if (!isGameStart) {
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
