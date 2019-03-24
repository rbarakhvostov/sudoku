module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (! matrix[row][col]) {
        for (let num = 1; num <= 9; num++) {
          if (check(matrix, row, col, num)) {
            matrix[row][col] = num;
            break;
          };
        };
      };
    };
  };
  return matrix;
};

function check(matrix, row, col, num) {
  return check_row(matrix, row, num) && check_col(matrix, col, num) && check_block(matrix, row, col, num);
};

function check_row(matrix, row, num) {
  for (let col = 0; col < 9; col++) {
    if (matrix[row][col] === num) return false;
  };
  return true;
};

function check_col(matrix, col, num) {
  for (let row = 0; row < 9; row++) {
    if (matrix[row][col] === num) return false;
  };
  return true;
};

function check_block(matrix, row, col, num) {
  row = Math.floor(row / 3) * 3;
  col = Math.floor(col / 3) * 3;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (matrix[row + r][col + c] === num)  return false; 
    };
  };
  return true;
}
