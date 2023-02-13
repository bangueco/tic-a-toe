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
    move.classList.add("disable-buttons");
    playerMoveX(0); // Disables player x move
    playerMoveO(1); // Enables player o move
  } else {
    // Player O always second
    move.textContent = "O";
    move.classList.add("disable-buttons");
    playerMoveX(1); // Enables player x move
    playerMoveO(0); // Disables player o move
  }
}

function clickBox(move) {
  playerTurns(move);
}
