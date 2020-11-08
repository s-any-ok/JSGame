const $start = document.querySelector("#start");
const $game = document.querySelector("#game");

$start.addEventListener("click", startGame);

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
  $game.insertAdjacentElement("afterbegin", box);
}
