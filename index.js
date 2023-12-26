const div = document.querySelectorAll(".items");
const player1_0 = document.getElementById("player_1");
const player2_X = document.getElementById("player_2");

let Player_one_win_count = 0;
let Player_two_win_count = 0;

let steps = 0;
let board = [
  ["", null, 0],
  [null, "", null],
  [8, null, 1],
];

//clear board function
function clearBoard() {
  board = [
    ["", null, 0],
    [null, "", null],
    [8, null, 1],
  ];
  div.forEach((element) => {
    element.innerHTML = "";
  });
  steps = 0;
}

//is Game Over
function isGameOver(theBoard) {
  console.log(board);
  //checking for row
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === "O") {
        Player_one_win_count += 1;
        player1_0.innerHTML = Player_one_win_count;
        setTimeout(() => {
          alert("Winner is Player One");
          clearBoard();
        });
      } else {
        Player_two_win_count += 1;
        player2_X.innerHTML = Player_two_win_count;
        setTimeout(() => {
          alert("Winner is Player Two");
          clearBoard();
        });
      }
      return;
    }
  }

  //checking for collumn
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] === "O") {
        Player_one_win_count += 1;
        player1_0.innerHTML = Player_one_win_count;
        setTimeout(() => {
          alert("Winner is Player One");
          clearBoard();
        });
      } else {
        Player_two_win_count += 1;
        player2_X.innerHTML = Player_two_win_count;
        setTimeout(() => {
          alert("Winner is Player Two");
          clearBoard();
        });
      }
      return;
    }
  }

  //checking for diagonal and anti diagonal
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] === "O") {
      Player_one_win_count += 1;
      player1_0.innerHTML = Player_one_win_count;
      setTimeout(() => {
        alert("Winner is Player One");
        clearBoard();
      });
    } else {
      Player_two_win_count += 1;
      player2_X.innerHTML = Player_two_win_count;
      setTimeout(() => {
        alert("Winner is Player Two");
        clearBoard();
      });
    }
    return;
  } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[0][2] === "O") {
      Player_one_win_count += 1;
      player1_0.innerHTML = Player_one_win_count;
      setTimeout(() => {
        alert("Winner is Player One");
        clearBoard();
      });
    } else {
      Player_two_win_count += 1;
      player2_X.innerHTML = Player_two_win_count;
      setTimeout(() => {
        alert("Winner is Player Two");
        clearBoard();
      });
    }
    return;
  }

  //Logic for Draw
  let count = 0;
  div.forEach((element) => {
    if (element.innerHTML === "") {
      count += 1;
    }
  });
  if (count === 0) {
    setTimeout(() => {
      alert("Draw");
      clearBoard();
    });
  }
  return;
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
