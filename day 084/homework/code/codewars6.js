
// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

// Tic-Tac-Toe Checker

function isSolved(board) {
  for (let row of board) {
    if (row[0] !== 0 && row[0] === row[1] && row[1] === row[2]) {
      return row[0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] !== 0 &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }
  if (
    board[0][0] !== 0 &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] !== 0 &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }
  for (let row of board) {
    if (row.includes(0)) {
      return -1;
    }
  }
  return 0;
}