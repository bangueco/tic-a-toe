const Player = (marker, isTurn) => {
  let _score = 0;

  const getPlayerScore = () => {
    return _score;
  };

  const getMarker = () => {
    return marker;
  };

  const incrementPlayerScore = () => {
    _score += 1;
  };

  return {
    getPlayerScore,
    incrementPlayerScore,
    getMarker,
    isTurn,
  };
};

const DisplayController = (() => {
  const _results = document.getElementById("results");
  const _player_x_score = document.getElementById("player_x_score");
  const _player_o_score = document.getElementById("player_o_score");

  const setMessage = (msg) => {
    _results.textContent = msg;
  };

  const setScore = (winner) => {
    if (winner === "X") {
      GameBoard.playerOne.incrementPlayerScore();
      _player_x_score.textContent = `Player X Score: ${GameBoard.playerOne.getPlayerScore()}`;
    }

    if (winner === "O") {
      GameBoard.playerTwo.incrementPlayerScore();
      _player_o_score.textContent = `Player O Score: ${GameBoard.playerTwo.getPlayerScore()}`;
    }
  };

  return {
    setMessage,
    setScore,
  };
})();

const GameBoard = (() => {
  const playerOne = Player("X", true);
  const playerTwo = Player("O", false);

  const _winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const _board = ["", "", "", "", "", "", "", "", ""];

  const _placeMarker = (box) => {
    if (playerOne.isTurn === true) {
      _board[box.dataset.row] = playerOne.getMarker();
      box.textContent = playerOne.getMarker();
      playerOne.isTurn = false;
      playerTwo.isTurn = true;
      DisplayController.setMessage("Player O's Turn");
    } else {
      _board[box.dataset.row] = playerTwo.getMarker();
      box.textContent = playerTwo.getMarker();
      playerOne.isTurn = true;
      playerTwo.isTurn = false;
      DisplayController.setMessage("Player X's Turn");
    }
  };

  const _checkForWinner = () => {
    for (let x = 0; x <= _winningConditions.length - 1; x++) {
      const condition = _winningConditions[x];
      const rowA = _board[condition[0]];
      const rowB = _board[condition[1]];
      const rowC = _board[condition[2]];

      if (rowA == "" || rowB == "" || rowC == "") {
        continue;
      }

      if (rowA === rowB && rowB === rowC) {
        DisplayController.setMessage(`The winner is ${rowA}`);
        DisplayController.setScore(rowA);
        break;
      }
    }
  };

  const initGameBoard = () => {
    console.log("Gameboard Intialized");
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("click", function eventHandler(e) {
        _placeMarker(e.target);
        _checkForWinner();
        console.log(playerOne.getPlayerScore());
        this.removeEventListener("click", eventHandler); // remove event listener on clicked box
      });
    });
    DisplayController.setMessage("Player X's Turn");
  };

  initGameBoard();

  return {
    playerOne,
    playerTwo,
  };
})();
