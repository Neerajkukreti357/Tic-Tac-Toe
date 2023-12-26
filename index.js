const div = document.querySelectorAll(".items");
const player1_0 = document.getElementById("player_1");
const player2_X = document.getElementById("player_2");

let Player_one_win_count = 0;
let Player_two_win_count = 0;

let steps = 0;
let board = [
  ["", null, "zero"],
  [null, "", null],
  ["", null, ""],
];

//clear board function
function clearBoard() {
  board = [
    ["", null, "zero"],
    [null, "", null],
    ["", null, ""],
  ];
  steps = 0;
}

//is Game Over
function isGameOver(theBoard) {
  // checking for row
  for (let i = 0; i < 3; i++) {
    if (
      theBoard[i][0] === theBoard[i][1] &&
      theBoard[i][1] === theBoard[i][2]
    ) {
      clearBoard();
      if (theBoard[i][0] === "O") {
        Player_one_win_count += 1;
        player1_0.innerHTML = Player_one_win_count;
        setTimeout(() => {
          div.forEach((element) => {
            element.innerHTML = "";
          });
          alert("Player 1 Wins");
        });
      } else {
        Player_two_win_count += 1;
        player2_X.innerHTML = Player_two_win_count;
        setTimeout(() => {
          div.forEach((element) => {
            element.innerHTML = "";
          });
          alert("Player 2 Wins");
        });
      }
      return;
    }
  }
  // checking for collumn
  for (let i = 0; i < 3; i++) {
    if (
      theBoard[0][i] === theBoard[1][i] &&
      theBoard[1][i] === theBoard[2][i]
    ) {
      clearBoard();
      if (theBoard[0][i] === "O") {
        Player_one_win_count += 1;
        player1_0.innerHTML = Player_one_win_count;
        setTimeout(() => {
          div.forEach((element) => {
            element.innerHTML = "";
          });
          alert("Player 1 Wins");
        });
      } else {
        Player_two_win_count += 1;
        player2_X.innerHTML = Player_two_win_count;
        setTimeout(() => {
          div.forEach((element) => {
            element.innerHTML = "";
          });
          alert("Player 2 Wins");
        });
      }
      return;
    }
  }
  // checking for diagnol and antidiagnol
  if (theBoard[0][0] === theBoard[1][1] && theBoard[1][1] === theBoard[2][2]) {
    clearBoard();
    if (theBoard[0][0] === "O") {
      Player_one_win_count += 1;
      player1_0.innerHTML = Player_one_win_count;
      setTimeout(() => {
        div.forEach((element) => {
          element.innerHTML = "";
        });
        alert("Player 1 Wins");
      });
    } else {
      Player_two_win_count += 1;
      player2_X.innerHTML = Player_two_win_count;
      setTimeout(() => {
        div.forEach((element) => {
          element.innerHTML = "";
        });
        alert("Player 2 Wins");
      });
    }
    return;
  } else if (
    theBoard[0][2] === theBoard[1][1] &&
    theBoard[1][1] === theBoard[2][0]
  ) {
    clearBoard();
    if (theBoard[1][1] === "O") {
      Player_one_win_count += 1;
      player1_0.innerHTML = Player_one_win_count;
      setTimeout(() => {
        div.forEach((element) => {
          element.innerHTML = "";
        });
        alert("Player 1 Wins");
      });
    } else {
      Player_two_win_count += 1;
      player2_X.innerHTML = Player_two_win_count;
      setTimeout(() => {
        div.forEach((element) => {
          element.innerHTML = "";
        });
        alert("Player 2 Wins");
      });
    }
    return;
  }
  // draw logic
  let count = 0;
  div.forEach((element) => {
    if (element.innerHTML === "") count += 1;
  });
  if (count === 0) {
    clearBoard();
    div.forEach((element) => {
      element.innerHTML = "";
    });
    setTimeout(() => {
      alert("Draw");
    });
  }
}

// logic for building the board
function fillBoard(index, element) {
  if (index < 3) {
    board[0][index] = element.innerHTML;
  } else if (index >= 3 && index < 6) {
    board[1][index - 3] = element.innerHTML;
  } else if (index >= 6 && index < 9) {
    board[2][index - 3 * 2] = element.innerHTML;
  }
}

// event handler
div.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (
      steps % 2 == 0 &&
      element.innerHTML === "" &&
      element.innerHTML !== "X"
    ) {
      element.innerHTML = "O";
      steps += 1;
      fillBoard(index, element);
      isGameOver(board);
    } else if (
      element.innerHTML === "" &&
      element.innerHTML !== "O" &&
      element.innerHTML !== "X"
    ) {
      element.innerHTML = "X";
      steps += 1;
      fillBoard(index, element);
      isGameOver(board);
    } else {
      console.log("Dont click on Used cell sir");
    }
  });
});
