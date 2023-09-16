const Player = (marker, isTurn) => {
  let _score = 0;

  const getPlayerScore = () => {
    return _score;
  };

  const getMarker = () => {
    return marker;
  };

  const addPoints = () => {
    _score += 1;
  };

  return {
    getPlayerScore,
    addPoints,
    getMarker,
    isTurn,
  };
};

const DisplayController = (() => {
  const _results = document.getElementById("results");
  const _player_x_score = document.getElementById("player_x_score");
  const _player_o_score = document.getElementById("player_o_score");
  const _buttons = document.getElementById("buttons");

  const setMessage = (msg) => {
    _results.textContent = msg;
  };

  const setScore = (winner) => {
    if (winner === "X") {
      GameBoard.playerOne.addPoints();
      _player_x_score.textContent = `Player X Score: ${GameBoard.playerOne.getPlayerScore()}`;
    }

    if (winner === "O") {
      GameBoard.playerTwo.addPoints();
      _player_o_score.textContent = `Player O Score: ${GameBoard.playerTwo.getPlayerScore()}`;
    }
  };

  const _clearBoxes = () => {
    const boxes = document.querySelectorAll(".box");
    for (let node = 0; node <= boxes.length - 1; node++) {
      boxes[node].textContent = "";
    }
  };

  const renderButtons = () => {
    // Render restart button
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart";
    _buttons.appendChild(restartBtn);

    // Render continue button
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "Continue";
    _buttons.appendChild(continueBtn);
    continueBtn.addEventListener("click", () => {
      _clearBoxes();
      _concealButtons();
      GameBoard.initGameBoard();
    });
  };

  const _concealButtons = () => {
    while (_buttons.firstChild) {
      _buttons.removeChild(_buttons.firstChild);
    }
  };

  return {
    setMessage,
    setScore,
    renderButtons,
  };
})();

const GameBoard = (() => {
  let _move;

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
      move++;
    } else {
      _board[box.dataset.row] = playerTwo.getMarker();
      box.textContent = playerTwo.getMarker();
      playerOne.isTurn = true;
      playerTwo.isTurn = false;
      DisplayController.setMessage("Player X's Turn");
      move++;
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
        DisplayController.renderButtons();
        _disableBoxes();
        _clearBoard();
        break;
      }

      if (rowA !== rowB && rowB !== rowC && move === 9) {
        DisplayController.setMessage(`It's a tie! No one won the game. :(`);
        DisplayController.renderButtons();
        _disableBoxes();
        _clearBoard();
        break;
      }
    }
  };

  const initGameBoard = () => {
    move = 0;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("click", function eventHandler(e) {
        _placeMarker(e.target);
        _checkForWinner();
        this.removeEventListener("click", eventHandler); // remove event listener on clicked box
      });
    });
    if (playerOne.isTurn === true) {
      DisplayController.setMessage(`Player X Turns`);
    } else {
      DisplayController.setMessage(`Player O Turns`);
    }
  };

  const _disableBoxes = () => {
    const boxes = document.querySelectorAll(".box");
    for (let node = 0; node <= boxes.length - 1; node++) {
      boxes[node].outerHTML = boxes[node].outerHTML;
    }
  };

  const _clearBoard = () => {
    for (let board = 0; board <= _board.length - 1; board++) {
      _board[board] = "";
    }
  };

  initGameBoard();

  return {
    playerOne,
    playerTwo,
    initGameBoard,
  };
})();
