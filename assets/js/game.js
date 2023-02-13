/* Default Player Turns
0 = disable
1 = enable
*/

let player_x = 1;
let player_o = 0;

function playerMoveX(move) {
  player_x = move;
}

function playerMoveO(move) {
  player_o = move;
}

function playerTurns() {
  if (player_x == 1 && player_o == 0) {
    // Player X always goes first
    console.log("X");
    playerMoveX(0); // Disables player x move
    playerMoveO(1); // Enables player o move
  } else {
    console.log("Y");
    // Player O always second
    playerMoveX(1); // Enables player x move
    playerMoveO(0); // Disables player o move
  }
}

function clickBox() {
  playerTurns();
}
