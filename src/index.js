const checkRow = (matrix, row, num) => {
  for (let col = 0; col < 9; col += 1) {
    if (matrix[row][col] === num) return false;
  }

  return true;
};

const checkCol = (matrix, col, num) => {
  for (let row = 0; row < 9; row += 1) {
    if (matrix[row][col] === num) return false;
  }

  return true;
};

const checkBlock = (matrix, row, col, num) => {
  const newRow = Math.floor(row / 3) * 3;
  const newCol = Math.floor(col / 3) * 3;

  for (let r = 0; r < 3; r += 1) {
    for (let c = 0; c < 3; c += 1) {
      if (matrix[newRow + r][newCol + c] === num) return false;
    }
  }

  return true;
};

const check = (matrix, row, col, num) => (
  checkRow(matrix, row, num)
  && checkCol(matrix, col, num)
  && checkBlock(matrix, row, col, num)
);


const findEmpty = (matrix) => {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (matrix[row][col] === 0) return [row, col];
    }
  }

  return false;
};

const f = (copyMatrix) => {
  // const copyMatrix = matrix.map((i) => [...i]);

  if (!findEmpty(copyMatrix)) return true;

  const [row, col] = findEmpty(copyMatrix);

  for (let num = 1; num <= 9; num += 1) {
    if (check(copyMatrix, row, col, num)) {
      copyMatrix[row][col] = num;

      if (f(copyMatrix)) return true;

      copyMatrix[row][col] = 0;
    }
  }

  return false;
};

module.exports = solveSudoku = (matrix) => {
  const copyMatrix = matrix.map((i) => [...i]);

  console.table(copyMatrix);

  f(copyMatrix);

  console.table(copyMatrix);

  return copyMatrix;
};
