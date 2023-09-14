const Player = (marker, isTurn) => {
  let score = 0;

  return {
    score,
    marker,
    isTurn,
  };
};

const GameBoard = (() => {
  const _playerOne = Player("X", true);
  const _playerTwo = Player("O", false);

  const _winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 5],
  ];

  const _board = ["", "", "", "", "", "", "", "", ""];

  const _placeMarker = (box) => {
    if (_playerOne.isTurn === true) {
      _board[box.dataset.row] = _playerOne.marker;
      box.textContent = _playerOne.marker;
      _playerOne.isTurn = false;
      _playerTwo.isTurn = true;
    } else {
      _board[box.dataset.row] = _playerTwo.marker;
      box.textContent = _playerTwo.marker;
      _playerOne.isTurn = true;
      _playerTwo.isTurn = false;
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
        alert("Yes?");
        break;
      }
    }
  };

  const initGameBoard = () => {
    console.log("Gameboard Intialized");
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("click", (e) => {
        _placeMarker(e.target);
        _checkForWinner();
      });
    });
  };

  initGameBoard();
})();
