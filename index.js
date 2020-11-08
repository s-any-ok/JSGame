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
  let box = document.createElement("div");

  box.style.width = box.style.height = "50px";
  box.style.position = "absolute";
  box.style.backgroundColor = "#000";
  box.style.top = "50px";
  box.style.left = "100px";
  box.setAttribute("data-box", "true");
  $game.insertAdjacentElement("afterbegin", box);
}

function handleBoxClick(e) {
  if (e.target.dataset.box) {
    renderBox();
    score++;
    console.log(score);
  }
  console.log(e.target.dataset.box);
}
