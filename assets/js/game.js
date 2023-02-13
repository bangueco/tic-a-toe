/* Default Player Turns
0 = disable
1 = enable
*/

let player_x = 1;
let player_o = 0;

// Queries
let a1 = document.querySelector("#a-1");
let a2 = document.querySelector("#a-2");
let a3 = document.querySelector("#a-3");

let b1 = document.querySelector("#b-1");
let b2 = document.querySelector("#b-2");
let b3 = document.querySelector("#b-3");

let c1 = document.querySelector("#c-1");
let c2 = document.querySelector("#c-2");
let c3 = document.querySelector("#c-3");

let boxes = document.querySelectorAll(".box");
function playerMoveX(move) {
  player_x = move;
}

function playerMoveO(move) {
  player_o = move;
}

function playerTurns(move) {
  if (player_x == 1 && player_o == 0) {
    // Player X always goes first
    move.textContent = "X";
    move.classList.add("disabled");
    playerMoveX(0); // Disables player x move
    playerMoveO(1); // Enables player o move
  } else {
    // Player O always second
    move.textContent = "O";
    move.classList.add("disabled");
    playerMoveX(1); // Enables player x move
    playerMoveO(0); // Disables player o move
  }
}

function clickBox(move) {
  playerTurns(move);

  if (a1.textContent == "X" && a2.textContent == "X" && a3.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (b1.textContent == "X" && b2.textContent == "X" && b3.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (c1.textContent == "X" && c2.textContent == "X" && c3.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (a1.textContent == "X" && b1.textContent == "X" && c1.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (a2.textContent == "X" && b2.textContent == "X" && c2.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (a3.textContent == "X" && b3.textContent == "X" && c3.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (a1.textContent == "X" && b2.textContent == "X" && c3.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (a3.textContent == "X" && b2.textContent == "X" && c1.textContent == "X") {
    alert("WORKS");
    disableBoxes();
  } else if (a1.textContent == "O" && a2.textContent == "O" && a3.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  } else if (b1.textContent == "O" && b2.textContent == "O" && b3.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  } else if (c1.textContent == "O" && c2.textContent == "O" && c3.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  } else if (a1.textContent == "O" && b1.textContent == "O" && c1.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  } else if (a2.textContent == "O" && b2.textContent == "O" && c2.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  } else if (a3.textContent == "O" && b3.textContent == "O" && c3.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  } else if (a1.textContent == "O" && b2.textContent == "O" && c3.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  } else if (a3.textContent == "O" && b2.textContent == "O" && c1.textContent == "O") {
    alert("WORKS");
    disableBoxes();
  }
}

function disableBoxes() {
  for (let listOfNodes = 0; listOfNodes <= 8; listOfNodes++) {
    boxes[listOfNodes].classList.add("disabled");
  }
}

function enableBoxes() {
  for (let listOfNodes = 0; listOfNodes <= 8; listOfNodes++) {
    boxes[listOfNodes].classList.remove("disabled");
  }
}
