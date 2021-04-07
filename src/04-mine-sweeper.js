/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const inField = (x, y) => !(x < 0 || x > matrix.length - 1 || y < 0 || y > matrix[0].length - 1);

  function checkNeighbors(iX, iY) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (inField(iX + x, iY + y) && matrix[iX + x][iY + y] === true) {
          if (iX + x !== iX || iY + y !== iY) count++;
        }
      }
    }
    return count;
  }

  return matrix.map((line, iX) => line.map((elem, iY) => checkNeighbors(iX, iY)));
}

module.exports = minesweeper;
